import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDonj0UUWnJqcP8JarUATjPC0gVyuSvZT8',
    v: '3.26',
    libraries: 'places' // Only if you need Autocomplete
  }
})
