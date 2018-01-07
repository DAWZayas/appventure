export default {
  getTournaments: state => {
    delete state.tournaments['.key']
    return state.tournaments
  },
  getImages: state => state.images,
  getUser: state => state.user,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError,
  getDarkTheme: state => state.darkTheme
}