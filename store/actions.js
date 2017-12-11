import firebaseApp from '~/firebaseapp'
import { firebaseAction } from 'vuexfire'

export default {
  /**
   * Add new tournaments to firebase
   * @param {object} store
   * @param {object} newTournament
   */
  setArticleAppventure ({commit, state}, newTournament) {
    if (state.tournamentsRef) {
      state.tournamentsRef['.value'].update({newTournament})
    } else {
      commit('setArticleAppventure', newTournament)
    }
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
    }).catch(err => {
      commit('setAuthError', err.message)
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
  logout ({state}) {
    firebaseApp.auth().signOut()
  },
  /**
   * Binds firebase auth listener to the auth changes to the callback that will set the store's user object
   * @param {object} store
   */
  bindAuth ({commit, dispatch, state}) {
    firebaseApp.auth().onAuthStateChanged(user => {
      commit('setUser', user)
      if (user && !user.isAnonymous) {
        dispatch('bindFirebaseReferences', user)
      }
      if (!user) {
        dispatch('bindFirebaseReferences')
      }
    })
  },
  /**
  * Binds tournaments to firebase
  * @param {object} store
  */
  bindFirebaseReferences: firebaseAction(({state, commit, dispatch}, user) => {
    let db = firebaseApp.database()
    let tournamentsRef = db.ref('/tournaments')

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
  })
}
