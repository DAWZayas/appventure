export default {
  getTournaments: state => state.tournaments,
  getImages: state => state.images,
  getUser: state => state.user,
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError
}
