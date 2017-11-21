export default {
  setArticleAppventure (state, newTournament) {
    state.tournaments.push(newTournament)
  },
  setLoginStatus (state) {
    state.isAuthenticated = !state.isAuthenticated
  },
  setConfigRef (state, value) {
    state.configRef = value
  }
}
