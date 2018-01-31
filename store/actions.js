import firebaseApp from '~/firebaseapp'
import { firebaseAction } from 'vuexfire'
import uuidv1 from 'uuid/v1'

export default {
  /**
   * Uploads individual file
   * @param file
   * @returns {firebase.Promise}
   */
  async uploadImage ({commit}, { file, index }) {
    let ref = firebaseApp.storage().ref().child('images/tournaments')
    var uploadTask = ref.child(uuidv1()).child(file.name).put(file)

    return new Promise(function (resolve, reject) {
      uploadTask.on('state_changed',
      (snapshot) => {
        let progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
        commit('setProgress', { index, progress })
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            break

          case 'storage/canceled':
            break

          case 'storage/unknown':
            break
        }
        reject()
      },
      () => {
        resolve(uploadTask.snapshot.downloadURL)
      })
    })
  },
  /**
   * Uploads images to the firebase datastore
   * @param {object} dispatch
   * @param files
   * @returns {Promise}
   */
  uploadImages ({dispatch}, files) {
    return Promise.all(files.map(async (file, index) => {
      return await dispatch('uploadImage', { file, index })
    }))
  },
  /**
   * Filters tournaments by category
   * @param {object} store
   * @param {object} category & subcategory
   */
  filterBy ({commit}, { category, subcategory }) {
    var ref = firebaseApp.database().ref('tournaments')
    var field, query
    var tournaments = []

    subcategory
      ? (field = 'subCategory', query = subcategory)
      : (field = 'category', query = category)

    ref.orderByChild(field).equalTo(query).on('value', function (snapshot) {
      tournaments.push(snapshot.val())
    })

    const xs = []
    for (var i in tournaments[0]) {
      xs.push(tournaments[0][i])
      xs[xs.length - 1]['key'] = i
    }

    commit('setFilteredTournaments', xs)
  },
  /**
   * Add new tournaments to firebase
   * @param {object} store
   * @param {object} newTournament
   */
  setArticleAppventure ({commit, state}, newTournament) {
    if (state.tournamentsRef) {
      state.tournamentsRef.push(newTournament)
    } else {
      commit('setArticleAppventure', newTournament)
    }
  },
  /**
   * Set theme to Dark (light by default)
   * @param {object} store
   * @param {boolean} darkTheme
   */
  setDarkTheme ({state}, darkTheme) { state.usersRef.child(state.user.uid).child('darkTheme').set(darkTheme) },
  /**
   * Creates a new user with this email and password and stores it into database
   * @param {object} store
   * @param {object} email and password
   */
  createUser ({commit}, {email, password}) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      commit('setAuthError', '')
    }).catch(error => {
      commit('setAuthError', error.message)
      console.log(error.message)
    })
  },
  /**
   * Authenticates an user
   * @param {object} store
   * @param {object} email and password
   */
  authenticate ({state, commit}, {email, password}, router) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      commit('setAuthError', '')
      this.$router.push('/')
    }).catch(error => {
      commit('setAuthError', error.message)
      console.log(error.message)
    })
  },
  /**
   * Updates user display name
   * @param state
   * @param commit
   * @param {string} displayName
   */
  updateUserName ({state}, displayName) {
    state.user.updateProfile({ displayName: displayName })
    state.usersRef.child(state.user.uid).child('displayName').set(displayName)
  },
  /**
   * Updates user's profile pic
   * @param state
   * @param {string} photoURL
   */
  updatePhotoURL ({state}, photoURL) {
    state.user.updateProfile({ photoURL: photoURL })
    state.usersRef.child(state.user.uid).child('photoURL').set(photoURL)
  },
  /**
   * Updates user's email address
   * @param state
   * @param {string} email
   */
  updateUserEmail ({state}, email) {
    state.user.updateEmail(email).then(() => {
      // Update successful.
    }, error => {
      console.log(error)
    })
  },
  /**
   * Resets authentication error
   * @param commit
   */
  resetAuthError ({commit}) { commit('setAuthError', '') },
  /**
  * Logouts the user from the application
  * @param {object} store
  */
  logout ({state, dispatch}, router) {
    firebaseApp.auth().signOut()
    dispatch('unbindUserData', {toUnbind: 'userData'})
    this.$router.push('/login')
  },
  /**
   * Binds firebase auth listener to the auth changes to the callback that will set the store's user object
   * @param {object} store
   */
  bindAuth ({commit, dispatch}) {
    let db = firebaseApp.database()
    let usersRef = db.ref(`/users`)
    firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      commit('setUsersRef', usersRef)

      if (user && !user.isAnonymous) {
        let displayName = user.displayName || user.email.split('@')[0]
        let id = user.uid

        if (!user.displayName) { dispatch('updateUserName', {displayName, id}) }
        dispatch('bindFirebaseReferences', user)
        dispatch('bindUserData', {usersRef, id})

        usersRef.child(id).once('value', function (snapshot) {
          snapshot.hasChild('displayName') ? null : snapshot.child('displayName').set(displayName)
          snapshot.hasChild('photoURL') ? null : dispatch('updatePhotoURL', '/undefined_user.png')
          snapshot.hasChild('exist') ? null : snapshot.child('exist').set(true)
        })
      }
      if (!user) {
        dispatch('unbindFirebaseReferences')
        dispatch('unbindUserData')
      }
    })
  },
  /**
  * Binds tournaments to firebase
  * @param {object} store
  */
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}, user) => {
    let db = firebaseApp.database()
    let tournamentsRef = db.ref(`/tournaments`)

    dispatch('bindFirebaseReference', {reference: tournamentsRef, toBind: 'tournaments'}).then(() => {
      commit('setTournamentsRef', tournamentsRef)
    })
  }),
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        let values = state[toBind]
        typeof values === 'object' && delete values['.key']
        reference.set(values)
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
  bindUserData: firebaseAction(({dispatch}, {usersRef, id}) => {
    dispatch('bindFirebaseReference', {reference: usersRef.child(id), toBind: 'userData'})
  }),
  /**
  * Undbinds firebase references
  */
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setTournamentsRef', null)
    try {
      unbindFirebaseRef('tournaments')
    } catch (error) {
      return
    }
  }),
  unbindUserData: firebaseAction(({commit}) => commit('clearUserData'))
}
