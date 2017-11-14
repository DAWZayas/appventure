export default {
  setArticleAppventure (state, newTournament) {
    state.tournaments.push(newTournament)
  },
  setLoginStatus (state, redirect) {
    state.isAuthenticated = true
  }
}
