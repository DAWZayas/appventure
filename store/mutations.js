export default {
  setArticleAppventure (state, newTournament) {
    state.tournaments.push(newTournament)
  },
  setTournamentsRef (state, value) {
    state.tournamentsRef = value
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
