<template>
  <v-form>
    <google-maps-component @location="(event) => newArt.location = event"></google-maps-component>
    <date-pickers :newArt.sync="newArt"></date-pickers>

    <v-text-field v-model="newArt.prize" type="number" label="Precio por persona" min="1" max="100" required></v-text-field>

    <v-select :items="type.main" v-model="newArt.type" label="Tipo de torneo" required></v-select>
    <v-text-field v-if="newArt.type" v-model="newArt.gauging" type="number" :label="type['label'][newArt.type]" min="1" max="1000" required></v-text-field>

    <v-btn color="primary" @click="submit">Siguiente</v-btn>
    <v-btn flat @click.stop="toStep(step - 1)">Volver</v-btn>
  </v-form>
</template>
<script>
  import { GoogleMapsComponent, DatePickers } from '~/components/create/StepTwo'

  export default {
    props: ['step', 'newArt'],
    methods: {
      toStep (step) { this.$emit('toStep', step) },
      submit () {
        this.$emit('update:newArt', this.newArt)
        this.toStep(this.step + 1)
      },
      initMapModal () { setTimeout(this.mapResize, 200) },
      mapResize () { this.$gmapDefaultResizeBus.$emit('resize') }
    },
    watch: {
      step: function () {
        this.step === 2 ? this.initMapModal() : null
      }
    },
    components: { GoogleMapsComponent, DatePickers },
    data () {
      return {
        type: {
          main: [
            { text: 'Individual', value: 'individual' },
            { text: 'Por equipos', value: 'teams' }
          ],
          label: {
            individual: 'Número de participantes',
            teams: 'Número de equipos'
          }
        }
      }
    }
  }
</script>
