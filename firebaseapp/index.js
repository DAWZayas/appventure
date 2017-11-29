// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBwJGI2Xe6hkT4H-CLLd3c-9o0poG0euKI',
  databaseURL: 'https://appventure-web.firebaseio.com',
  authDomain: 'appventure-web.firebaseapp.com',
  storageBucket: 'gs://appventure-web.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
