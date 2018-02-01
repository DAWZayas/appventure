<template>
  <div>
    <google-autocomplete @placechanged="updateCoords"></google-autocomplete>
    <br/>
    <GmapMap style="width: 100%; height: 300px;" :zoom="12" :center="marker.position">
      <GmapMarker :position="marker.position"/>
    </GmapMap>
    {{ marker }}
  </div>
</template>

<script>
  import { GoogleAutocomplete } from '~/components/test'

  export default {
    data () {
      return {
        marker: {position: { lat: 0, lng: 0 }},
        place: null,
        input: ''
      }
    },
    mounted: function () {
      this.geolocate()
    },
    methods: {
      geolocate () {
        navigator.geolocation.getCurrentPosition(position => {
          this.marker.position = { lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude) }
        })
      },
      updateCoords (event) {
        this.marker = event
      }
    },
    components: { GoogleAutocomplete }
  }
</script>
