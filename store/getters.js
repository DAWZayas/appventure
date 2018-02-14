export default {
  /**
   * Tournament Getters
   */
  getTournaments: state => {
    delete state.tournaments['.key']
    return state.tournaments
  },
  getArrayTournaments: state => {
    const xs = []
    delete state.tournaments['.key']
    for (var i in state.tournaments) {
      xs.push(state.tournaments[i])
      xs[xs.length - 1]['key'] = i
    }
    return xs
  },
  getFilteredTournaments: state => state.tFiltered,
  /**
   * User Getters
   */
  getUsers: state => {
    delete state.users['.key']
    return state.users
  },
  getArrayUsers: state => {
    const xs = []
    delete state.users['.key']
    for (var i in state.users) {
      xs.push(state.users[i])
      xs[xs.length - 1]['key'] = i
    }
    return xs
  },
  getUser: state => state.user,
  getUserData: state => state.userData,
  getDarkTheme: state => state.userData ? state.userData.darkTheme : false,
  getUserMessages: state => state.userData ? state.userData.messages : null,
  getDisplayName: state => state.userData ? state.userData.displayName : null,
  getEmail: state => state.user ? state.user.email : '',
  getUserPhoto: state => state.userData ? state.userData.photoURL : null,
  getUserType: state => state.userData ? state.userData.type : null,
  getUserTournaments: state => state.userData ? (state.userData.participating ? Object.keys(state.userData.participating) : null) : null,
  /**
   * Aux data Getters
   */
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError,
  getProgress: state => state.uploadProgress
}
