const darkTheme = false
const uploadProgress = []
const user = null
const userData = null
const tournaments = {}
const tournamentsRef = null

const defaultImg = {
  padel: require('~/assets/images/torneos/torneopadel.jpg'),
  futbol: require('~/assets/images/torneos/torneofutbol.jpg'),
  esports: require('~/assets/images/torneos/torneoesports.jpg'),
  poker: require('~/assets/images/torneos/torneopoker.jpg')
}

export default {
  darkTheme,
  uploadProgress,
  user,
  authError: '',
  userData,
  tournaments,
  tournamentsRef,

  defaultImg
}
