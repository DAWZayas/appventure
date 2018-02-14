const deleteKey = (stat) => {
  delete stat['.key']
  return stat
}

function getArray (stat) {
  // deleteKey(stat)
  const xs = []
  for (var i in stat) {
    xs.push(stat[i])
    xs[xs.length - 1]['key'] = i
  }
  return xs
}

export default {
  /**
   * Tournament Getters
   */
  getTournaments: state => state.tournaments ? deleteKey(state.tournaments) : null,
  getArrayTournaments: state => state.tournaments ? getArray(state.tournaments) : null,
  getFilteredTournaments: state => state.tFiltered,
  /**
   * User Getters
   */
  getUsers: state => state.users ? deleteKey(state.users) : null,
  getArrayUsers: state => state.users ? getArray(state.users) : null,
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
