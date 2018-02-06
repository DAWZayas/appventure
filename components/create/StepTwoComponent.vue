<template>
  <v-form>
    <google-maps-component></google-maps-component>
    <date-pickers></date-pickers>

    <v-text-field v-model="prize" type="number" label="Precio por persona" max="100" required></v-text-field>
    <v-text-field v-model="gauging" type="number" label="Cantidad de participantes" max="1000" required></v-text-field>
    <v-btn color="primary" @click="submit">Siguiente</v-btn>
    <v-btn flat @click="back">Volver</v-btn>  
  </v-form>
</template>
<script>
  import { GoogleMapsComponent, DatePickers } from '~/components/create/StepTwo'

  export default {
    props: ['step'],
    methods: {
      back () { this.$emit('stepBack') },
      submit () {
        this.$emit('stepTwo', { location: this.marker, initDate: this.formatDate(), finishDate: this.finishDate, createDate: this.getDate(), prize: this.prize, gauging: this.gauging, nextStep: 3 })
      },
      initMapModal () {
        setTimeout(this.mapResize, 200)
      },
      mapResize () {
        this.$gmapDefaultResizeBus.$emit('resize')
      }
    },
    watch: {
      step: function () {
        this.step === 2 ? this.initMapModal() : null
      }
    },
    components: { GoogleMapsComponent, DatePickers },
    data () {
      return {
        prize: '',
        gauging: ''
      }
    }
  }
</script>
