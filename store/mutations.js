export default {
  setDarkTheme (state, darkTheme) {
    state.darkTheme = darkTheme
  },
  /**
   * Mutations to upload images
   * These mutations allows the view to show
   * a progress bar
   * Also cleans the store after that
   */
  setFilePostions (state, index) {
    state.uploadProgress.splice(index, 0, 0)
  },
  setProgress (state, { index, progress }) {
    state.uploadProgress.splice(index, 1, progress)
  },
  clearProgress (state) {
    state.uploadProgress.splice(0, state.uploadProgress.length)
  },
  /**
   * User mutations
   */
  setUser (state, value) {
    state.user = value
  },
  setCurrentUser (state, user) {
    state.user = user
  },
  /*
   * Tournaments mutations
   */
  setArticleAppventure (state, newTournament) {
    state.tournaments.push(newTournament)
  },
  setTournamentsRef (state, value) {
    state.tournamentsRef = value
  },

  setAuthError (state, value) {
    state.authError = value
  },
  setIsAuthenticated (state, value) {
    state.isAuthenticated = value
  }
}
