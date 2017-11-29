import firebaseApp from '~/firebaseapp'
import { firebaseAction } from 'vuexfire'

export default {
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
    })
  },
  /**
   * Authenticates an user
   * @param {object} store
   * @param {object} email and password
   */
  authenticate ({state, commit}, {email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(() => {
      commit('setAuthError', '')
      this.$router.push('/appventure/')
    }).catch(err => {
      commit('setAuthError', err.message)
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
  logout ({state}) {
    firebaseApp.auth().signOut()
  },
  /**
   * Add new tournaments to firebase
   * @param {object} store
   * @param {object} newTournament
   */
  setArticleAppventure ({commit, state}, newTournament) {
    if (state.configRef) {
      state.configRef.update({newTournament})
    } else {
      commit('setArticleAppventure', newTournament)
    }
  },
  /**
  * Binds tournaments to firebase
  * @param {object} store
  */
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}) => {
    let db = firebaseApp.database()
    let configRef = db.ref('/tournaments')

    dispatch('bindFirebaseReference', {reference: configRef, toBind: 'tournaments'}).then(() => {
      commit('setConfigRef', configRef)
    })
  }),
  /**
  * Undbinds firebase references
  */
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setConfigRef', null)
    try {
      unbindFirebaseRef('tournaments')
    } catch (error) {
      return
    }
  }),
  /**
   * Binds firebase auth listener to the auth changes to the callback that will set the store's user object
   * @param {object} store
   */
  bindAuth ({commit, dispatch, state}) {
    firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      if (user) {
        dispatch('bindFirebaseUsers', user)
      }
      if (!user) {
        dispatch('unbindFirebaseUsers')
      }
    })
  },
  /**
  * Binds users to firebase
  * @param {object} store
  */
  bindFirebaseUsers: firebaseAction(({state, commit, dispatch}, user) => {
    let db = firebaseApp.database()
    let configRef = db.ref(`/users/${user.uid}`)

    dispatch('bindFirebaseReference', {reference: configRef, toBind: 'users'}).then(() => {
      commit('setConfigRef', configRef)
    })
  }),
  /**
  * Undbinds firebase references
  */
  unbindFirebaseUsers: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setConfigRef', null)
    try {
      unbindFirebaseRef('users')
    } catch (error) {
      return
    }
  }),
  /**
  * Generic binder of the firebase reference to the given key of the store's state
  * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
  * @param {object} store
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
  })
}
