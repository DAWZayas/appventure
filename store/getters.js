export default {
  getTournaments: state => state.tournaments['.value'],
  getImages: state => state.images,
  getUser: state => state.user,
  isAuthenticated: state => state.isAuthenticated,
  authError: state => state.authError
}
