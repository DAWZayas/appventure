export default {
  getTournaments: state => state.tournaments,
  getImages: state => state.images,
  getUser: state => state.user,
  isAuthenticated: state => state.isAuthenticated,
  authError: state => state.authError
}
