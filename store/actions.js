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
    // commit('setNumber', index)

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
   * Add new tournaments to firebase
   * @param {object} store
   * @param {object} newTournament
   */
  setArticleAppventure ({commit, state}, newTournament) {
    if (state.tournamentsRef) {
      // console.log('>>T>>>', newTournament)
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
  setDarkTheme ({commit, state}, darkTheme) {
    commit('setDarkTheme', darkTheme)
  },
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
   * Authenticates anonymous user
   * @param {object} store
   */
  authenticateAnonymous ({state}) {
    firebaseApp.auth().signInAnonymously().catch(error => {
      console.log(error.code, error.message)
    })
  },
  /**
   * Resets authentication error
   * @param commit
   */
  resetAuthError ({commit}) {
    commit('setAuthError', '')
  },
  /**
  * Logouts the user from the application
  * @param {object} store
  */
  logout ({state}, router) {
    firebaseApp.auth().signOut()
    this.$router.push('/login')
  },
  /**
   * Binds firebase auth listener to the auth changes to the callback that will set the store's user object
   * @param {object} store
   */
  bindAuth ({commit, dispatch, state}) {
    let db = firebaseApp.database()
    let usersRef = db.ref(`/users`)
    firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      if (user && !user.isAnonymous) {
        dispatch('bindFirebaseReferences', user)
        dispatch('bindUserData', user.uid)
        usersRef.child(user.uid).child('exist').set(true)
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
  bindUserData: firebaseAction(({state, dispatch}, id) => {
    let db = firebaseApp.database()
    let usersRef = db.ref(`/users`)
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
  unbindUserData: firebaseAction(({state, dispatch}) => {
    dispatch('unbindFirebaseReferences', {toUnbind: 'userData'})
  })
}
