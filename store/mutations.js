export default {
  /**
   * Mutations to upload images
   * These mutations allows the view to show
   * a progress bar
   * Also cleans the store after that
   */
  setProgress (state, { index, progress }) { state.uploadProgress.splice(index, 1, progress) },
  clearProgress (state) { state.uploadProgress = [] },
  /**
   * User mutations
   */
  setUser (state, value) { state.user = value },
  setUsersRef (state, value) { state.usersRef = value },
  setUserLocation (state, obj) { state.userLocation = obj },
  clearUserData (state) { state.userData = null },
  /*
   * Tournaments mutations
   */
  setTournamentsRef (state, value) { state.tournamentsRef = value },
  setFilteredTournaments (state, value) { state.tFiltered = value },
  /**
   * Connection mutations
   */
  setAuthErrorLogIn (state, value) { state.authErrorLogIn = value },
  setAuthErrorForgotPassword (state, value) { state.authErrorForgotPassword = value },
  setIsAuthenticated (state, value) { state.isAuthenticated = value }
}
