import { deleteKey, getArray, isOutDate, getSingleTournament } from '~/utils/utils'

export default {
  /**
   * Tournament Getters
   */
  getTournaments: state => state.tournaments ? deleteKey(state.tournaments) : null,
  getArrayTournaments: state => state.tournaments ? getArray(state.tournaments).filter(tournament => isOutDate(tournament)) : null,
  getURLs: state => state.urls || {},
  getFilteredTournaments: state => state.tFiltered,
  getTournamentSponsored: state => state.tournaments ? getSingleTournament(state.tournaments) : {},
  /**
   * User Getters
   */
  getUsers: state => state.users ? deleteKey(state.users) : null,
  getArrayUsers: state => state.users ? getArray(state.users) : null,
  getUser: state => state.user,
  getUserData: state => state.userData,
  getDarkTheme: state => state.userData ? state.userData.darkTheme : false,
  getUserMessages: state => state.userData ? state.userData.messages : {},
  getDisplayName: state => state.userData ? state.userData.displayName || state.user.displayName : 'AppVenture',
  getParticipating: state => state.userData ? (state.userData.participating || {}) : {},
  getEmail: state => state.user ? state.user.email : '',
  getUserPhoto: state => state.userData ? state.userData.photoURL || state.user.photoURL : '/undefined_user.png',
  getUserType: state => state.userData ? state.userData.type : null,
  getUserTournaments: state => state.userData ? (state.userData.participating ? Object.keys(state.userData.participating) : false) : false,
  getUserLocation: state => state.userLocation || { lat: 40.4381311, lng: -3.8196195 },
  /**
   * Aux data Getters
   */
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authErrorLogIn: state => state.authErrorLogIn,
  authErrorForgotPassword: state => state.authErrorForgotPassword,
  signUpError: state => state.signUpError,
  getProgress: state => state.uploadProgress
}
