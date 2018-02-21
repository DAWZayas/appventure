import { format, isBefore, subDays } from 'date-fns'

const isOutDate = (obj) => {
  let date = obj.finishDate.split('-')
  let compareDate = new Date(date[2], date[1] - 1, date[0])
  let today = subDays(format(new Date()), 10)
  return isBefore(today, compareDate)
}

/* const ObjFilter = (obj, predicate) =>
    Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {}) */

const deleteKey = (obj) => {
  const clone = {...obj}
  delete clone['.key']
  return clone
}

const getArray = (obj) => {
  const clone = deleteKey(obj)
  const xs = []
  for (var i in clone) {
    xs.push(clone[i])
    xs[xs.length - 1]['key'] = i
  }
  return xs
}

const randomNumber = x => Math.floor(Math.random() * (x + 1))

const getSingleTournament = (tournaments) => {
  const array = getArray(tournaments)
  console.log(array)
  return array[randomNumber(array.length)]
}

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
  getUserMessages: state => state.userData ? state.userData.messages : null,
  getDisplayName: state => state.userData ? state.userData.displayName : null,
  getParticipating: state => state.userData ? (state.userData.participating || {}) : {},
  getEmail: state => state.user ? state.user.email : '',
  getUserPhoto: state => state.userData ? state.userData.photoURL : null,
  getUserType: state => state.userData ? state.userData.type : null,
  getUserTournaments: state => state.userData ? (state.userData.participating ? Object.keys(state.userData.participating) : null) : null,
  getUserLocation: state => state.userLocation || { lat: 40.4381311, lng: -3.8196195 },
  /**
   * Aux data Getters
   */
  isAuthenticated: state => state.user && !state.user.isAnonymous,
  authError: state => state.authError,
  getProgress: state => state.uploadProgress
}
