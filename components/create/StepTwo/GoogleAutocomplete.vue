<template>
  <div>
    <v-text-field
      hide-details
      :id="id"
      :label="'Ubicación'"
      :error="error"
      ref="autocomplete"
      type="text"
      v-model="autocompleteText"
    ></v-text-field>
    <div id="alert">
      <v-alert
        type="error"
        :value="true"
        transition="scale-transition"
      >
        ¡ No se encuentra la ubicación !
      </v-alert>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: { type: String, default: '' },
      options: [{ type: 'address' }]
    },
    data () {
      return {
        id: 'gAutoComplete',
        autocomplete: null,
        autocompleteText: '',
        error: false
      }
    },
    mounted: function () {
      this.geolocate()

      // Override the default placeholder
      document.getElementById(this.id).setAttribute('placeholder', this.placeholder)
      this.autocomplete = new google.maps.places.Autocomplete(document.getElementById(this.id), this.options) // eslint-disable-line no-undef

      this.autocomplete.addListener('place_changed', () => {
        let place = this.autocomplete.getPlace()

        !place.geometry ? this.alertNr() : null

        let addressComponents = {
          street_number: 'short_name',
          route: 'long_name',
          locality: 'long_name',
          administrative_area_level_1: 'short_name',
          country: 'long_name',
          postal_code: 'short_name'
        }
        let returnData = {}

        if (place.address_components !== undefined) {
          // Get each component of the address from the place details
          for (let i = 0; i < place.address_components.length; i++) {
            let addressType = place.address_components[i].types[0]
            if (addressComponents[addressType]) {
              let val = place.address_components[i][addressComponents[addressType]]
              returnData[addressType] = val
            }
          }
          returnData['position'] = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
          returnData['name'] = place.name

          this.$emit('placechanged', returnData, place)
          this.autocompleteText = document.getElementById(this.id).value
        }
      })
    },
    methods: {
      geolocate () {
        navigator.geolocation.getCurrentPosition(position => {
          var geolocation = { lat: position.coords.latitude, lng: position.coords.longitude }
          var circle = new google.maps.Circle({ // eslint-disable-line no-undef
            center: geolocation,
            radius: position.coords.accuracy
          })
          this.autocomplete.setBounds(circle.getBounds())
        })
      },
      alertNr () {
        document.getElementById('alert').style.marginTop = 0
        var vm = this
        vm.error = true
        setTimeout(function () {
          vm.error = false
          document.getElementById('alert').style.marginTop = '-6rem'
        }, 2500)
      }
    }
  }
</script>
<style lang="scss" scoped>
  #alert {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    margin-top: -6rem;
    transition: margin-top 1s ease-out;
    z-index: 10;
  }
</style>
