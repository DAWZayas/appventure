export default {
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
  getImages: state => state.defaultImg,
  getUser: state => state.user,
  getUserPhoto: state => state.user ? state.user.photoURL : null,
  getUserData: state => state.userData,
  getUserTournaments: state => state.userData ? Object.keys(state.userData.participating) : null,
  getDisplayName: state => state.displayName,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError,
  getDarkTheme: state => state.darkTheme,
  getProgress: state => state.uploadProgress
}
