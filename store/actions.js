import firebaseApp from '~/firebaseapp'
import { firebaseAction } from 'vuexfire'
import uuidv1 from 'uuid/v1'
import speakingurl from 'speakingurl'
import { isOutDate } from '~/utils/utils'

// Database reference
const db = firebaseApp.database()

export default {
  /**
   * Uploads individual profilePic
   * @param {object} state
   * @param file
   * @returns {firebase.Promise}
   */
  uploadProfilePic ({state}, file) {
    let ref = firebaseApp.storage().ref().child('images/profilePics')
    return ref.child(state.user.uid).child(state.user.uid).put(file).then(snapshot => {
      return snapshot.downloadURL
    })
  },
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
    var ref = db.ref('tournaments')
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

    commit('setFilteredTournaments', xs.filter(tournament => isOutDate(tournament)))
  },
  /**
   * Add new tournaments to firebase
   * @param {object} store
   * @param {object} newTournament
   */
  setArticleAppventure ({commit, state}, newTournament) {
    let urls = db.ref(`/urls`)
    state.tournamentsRef.push(newTournament).then((snapshot) => {
      let sp = {
        date: speakingurl(newTournament.createDate),
        name: speakingurl(newTournament.name),
        key: snapshot.key
      }
      urls.child(sp.date).child(sp.name).set(sp.key)
    })
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
  createUser ({commit, dispatch}, {email, password}) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      commit('setSignUpError', '')
      dispatch('authenticate', {email, password})
      this.$router.push('/')
    }).catch(error => {
      commit('setSignUpError', error.message)
    })
  },
  /**
   * Authenticates an user
   * @param {object} store
   * @param {object} email and password
   */
  authenticate ({commit, dispatch}, {email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      commit('setAuthErrorLogIn', '')
      dispatch('bindAuth')
      this.$router.push('/')
    }).catch(error => {
      commit('setAuthErrorLogIn', error.message)
    })
  },
  /**
   * Updates user display name
   * @param state
   * @param commit
   * @param {string} displayName
   */
  updateUserName ({state}, userName) {
    state.user.updateProfile({ displayName: userName })
    state.usersRef.child(state.user.uid).child('displayName').set(userName)
  },
  /**
   * Updates user's profile pic
   * @param state
   * @param {string} photoURL
   */
  updatePhotoURL ({state}, profilePic) {
    state.user.updateProfile({ photoURL: profilePic })
    state.usersRef.child(state.user.uid).child('photoURL').set(profilePic)
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
   * Setter for type of user to UserData
   * @param {object} state
   * @param {string} type
   */
  setUserType ({state}, type) {
    type = type.charAt(0).toUpperCase() + type.slice(1)
    state.usersRef.child(state.user.uid).child('type').set(type)
  },
  /**
   * Add or disengage tournaments from User
   * @param {object} state
   * @param {object} parameters (key of tournament, category of tournament, number (+1 or -1))
   */
  addDissTournament ({state}, {key, category, number, option, info}) {
    let addTournamentRef = db.ref(`/users/${state.userData['.key']}/participating`)
    let tournamentRef = db.ref(`/tournaments/${key}/participants`)
    let userParticipantsRef = db.ref(`/tournaments/${key}/userParticipants`)

    info = info || state.userData.displayName

    tournamentRef.once('value', (snapshot) => {
      tournamentRef.set(parseInt(snapshot.val()) + number)
    }).then(addTournamentRef.child(key).set(category))

    option ? userParticipantsRef.child(state.userData['.key']).set(info) : userParticipantsRef.child(state.userData['.key']).set(null)
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
    let usersRef = db.ref(`/users`)
    firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      commit('setUsersRef', usersRef)

      if (user && !user.isAnonymous) {
        let displayName = user.displayName || user.email.split('@')[0]
        let photoURL = user.photoURL ? user.photoURL : '/undefined_user.png'
        let id = user.uid

        dispatch('bindFirebaseReferences')
        dispatch('bindUserData', {usersRef, id})

        usersRef.child(id).once('value', function (snapshot) {
          snapshot.hasChild('displayName') ? null : dispatch('updateUserName', displayName)
          snapshot.hasChild('photoURL') ? null : dispatch('updatePhotoURL', photoURL)
          snapshot.hasChild('type') ? null : dispatch('setUserType', 'venture')
        })
      }
      if (!user) { dispatch('unbindFirebaseReferences') }
    })
  },
  /**
  * Binds tournaments to firebase
  * @param {object} store
  */
  bindFirebaseReferences: firebaseAction(({commit, dispatch}) => {
    let tournamentsRef = db.ref(`/tournaments`)
    let usersRef = db.ref(`/users`)
    let urlsRef = db.ref(`/urls`)

    dispatch('bindFirebaseReference', {reference: tournamentsRef, toBind: 'tournaments'}).then(() => {
      commit('setTournamentsRef', tournamentsRef)
    })
    dispatch('bindFirebaseReference', {reference: usersRef, toBind: 'users'}).then(() => {
      commit('setUsersRef', usersRef)
    })
    dispatch('bindFirebaseReference', {reference: urlsRef, toBind: 'urls'})
  }),
  /**
   * Binds individual items to firebase
   */
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
    commit('setUsersRef', null)
    try {
      unbindFirebaseRef('users')
    } catch (error) {
      return
    }
  }),
  /**
   * Deletes UserData from state and messages from firebase
   */
  unbindUserData: firebaseAction(({commit, state}) => {
    state.usersRef.child(state.user.uid).child('messages').set({})
    commit('clearUserData')
  }),
  /**
  * Adds all new messages to each chat
  * @param { object } state
  * @param newMessage
  * @param uidUser
  */
  addMessage ({ state }, {newMessage, issuing, uidUser}) {
    let messagesRef = db.ref(`/users/` + uidUser + `/messages`)
    messagesRef.push({
      message: newMessage,
      issuing: issuing
    })
  },
  /**
   * Recover password
   * @param {object} commit
   * @param {object} email User email
   */
  recoverPassword ({commit}, {email}) {
    firebaseApp.auth().sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent.
      })
      .catch((error) => {
        commit('setAuthErrorForgotPassword', error.message)
      })
  }
}
