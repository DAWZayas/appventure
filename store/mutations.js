export default {
  setArticleAppventure (state, newTournament) {
    state.tournaments.push(newTournament)
  },
  setConfigRef (state, value) {
    state.configRef = value
  },
  setUser (state, value) {
    state.user = value
  },
  setAuthError (state, value) {
    state.authError = value
  },
  setIsAuthenticated (state, value) {
    state.isAuthenticated = value
  }
}
