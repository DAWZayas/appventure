export default {
  getTournaments: state => state.tournaments['.value'],
  getImages: state => state.images,
  getUser: state => state.user,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError
}
