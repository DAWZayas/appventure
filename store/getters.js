export default {
  getTournaments: state => {
    delete state.tournaments['.key']
    return state.tournaments
  },
  getImages: state => state.defaultImg,
  getUser: state => state.user,
  getUserPhoto: state => state.user ? state.user.photoURL : null,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError,
  getDarkTheme: state => state.darkTheme,
  getProgress: state => state.uploadProgress
}
