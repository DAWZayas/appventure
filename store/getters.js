const deleteKey = (obj) => {
  const clone = {...obj}
  delete clone['.key']
  return clone
}

const getArray = (stat) => {
  const clone = deleteKey(stat)
  const xs = []
  for (var i in clone) {
    xs.push(clone[i])
    xs[xs.length - 1]['key'] = i
  }
  return xs
}

const randomNumber = () => {
  return Math.floor(Math.random() * 101)
}

export default {
  /**
   * Tournament Getters
   */
  getTournaments: state => state.tournaments ? deleteKey(state.tournaments) : null,
  getArrayTournaments: state => state.tournaments ? getArray(state.tournaments) : null,
  getURLs: state => state.urls || {},
  getFilteredTournaments: state => state.tFiltered,
  getTournamentSponsored: state => { state.tournaments ? getArray(state.tournaments[randomNumber()]) : null },
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
  getParticipating: state => state.userData ? (state.userData.participating || {}) : {},
  getEmail: state => state.user ? state.user.email : '',
  getUserPhoto: state => state.userData ? state.userData.photoURL : null,
  getUserType: state => state.userData ? state.userData.type : null,
  getUserTournaments: state => state.userData ? (state.userData.participating ? Object.keys(state.userData.participating) : null) : null,
  getUserLocation: state => state.userLocation || { lat: 40.4381311, lng: -3.8196195 },
  /**
   * Aux data Getters
   */
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError,
  getProgress: state => state.uploadProgress
}
