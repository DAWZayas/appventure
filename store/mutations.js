export default {
  setArticleAppventure (state, newTournament) {
    state.tournaments.push(newTournament)
  },
  setLoginStatus (state) {
    state.isAuthenticated = !state.isAuthenticated
  }
}
