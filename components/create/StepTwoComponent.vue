<template>
  <v-form>
    <div>
      <google-autocomplete @placechanged="updateCoords"></google-autocomplete>
      <br/>
      <GmapMap style="width: 100%; height: 300px;" :zoom="12" :center="marker.position">
        <GmapMarker :position="marker.position"/>
      </GmapMap>
      {{ marker }}
    </div>
    
    <v-dialog
      v-model="date"
      lazy
      full-width
      width="290px"
    >
      <v-text-field
        slot="activator"
        label="Inicio"
        v-model="initDate"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker v-model="initDate" locale="es-es">
        <template slot-scope="{ save, cancel }">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="cancel">Cancelar</v-btn>
            <v-btn flat color="primary" @click="save">OK!</v-btn>
          </v-card-actions>
        </template>
      </v-date-picker>
    </v-dialog>

    <v-dialog
      v-model="date"
      lazy
      full-width
      width="290px"
    >
      <v-text-field
        slot="activator"
        label="Final"
        v-model="finishDate"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker v-model="initDate" locale="es-es">
        <template slot-scope="{ save, cancel }">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="cancel">Cancelar</v-btn>
            <v-btn flat color="primary" @click="save">OK!</v-btn>
          </v-card-actions>
        </template>
      </v-date-picker>
    </v-dialog>

    <v-text-field v-model="prize" type="number" label="Precio por persona" max="100" required></v-text-field>
    <v-text-field v-model="gauging" type="number" label="Cantidad de participantes" max="1000" required></v-text-field>
    <v-btn color="primary" @click="submit">Continue</v-btn>
    <v-btn flat>Cancelar</v-btn>  
  </v-form>
</template>
<script>
import { GoogleAutocomplete } from '~/components/create/utils'
import { format } from 'date-fns'

export default {
  mounted: function () {
    this.geolocate()
  },
  methods: {
    submit () {
      this.$emit('stepTwo', { location: this.marker, initDate: this.formatDate(), finishDate: this.finishDate, createDate: this.getDate(), prize: this.prize, gauging: this.gauging, nextStep: this.nextStep })
    },
    getDate () { return format(new Date(), 'DD-MM-YYYY') },
    formatDate () { return this.initDate.split('-').reverse().join('-') },
    geolocate () {
      navigator.geolocation.getCurrentPosition(position => {
        this.marker.position = { lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude) }
      })
    },
    updateCoords (event) { this.marker = event }
  },
  components: { GoogleAutocomplete },
  data () {
    return {
      date: false,
      menu: '',

      initDate: '',
      finishDate: '',
      createDate: '',
      prize: '',
      gauging: '',

      nextStep: 3,

      marker: {position: { lat: 40.4381311, lng: -3.8196195 }},
      place: null,
      input: ''
    }
  }
}
</script>
