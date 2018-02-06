<template>
  <div>
    <google-autocomplete @placechanged="updateCoords"></google-autocomplete>
    <br/>
    <gmap-map style="width: 100%; height: 300px;" :zoom="12" :center="marker.position">
      <gmap-marker :position="marker.position"/>
    </gmap-map>
    {{ marker }}
  </div>
</template>
<script>
  import { GoogleAutocomplete } from '~/components/create/StepTwo'

  export default {
    components: { GoogleAutocomplete },
    mounted: function () {
      this.geolocate()
    },
    methods: {
      geolocate () {
        navigator.geolocation.getCurrentPosition(position => {
          this.marker.position = { lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude) }
        })
      },
      updateCoords (event) { this.marker = event }
    },
    data () {
      return {
        marker: {position: { lat: 40.4381311, lng: -3.8196195 }}
      }
    }
  }
</script>
