<template>
  <div>
    <v-toolbar>
      <v-btn icon @click.native="cleanExit">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Crear torneo</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-stepper v-model="step" class="no-shadow">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="step > 1">Info. básica</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step > 2">Localización</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Imágenes</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content class="pt-2" step="1">
          <step-one-component @toStep="toStep" :newArt.sync="newArt"></step-one-component>
        </v-stepper-content>

        <v-stepper-content class="pt-2" step="2">
          <step-two-component @toStep="toStep" :newArt.sync="newArt" :step="step"></step-two-component>      
        </v-stepper-content>

        <v-stepper-content step="3">
          <step-three-component @toStep="toStep" :newArt="newArt"></step-three-component>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import { StepOneComponent, StepTwoComponent, StepThreeComponent } from '~/components/create'

export default {
  methods: {
    cleanExit () {
      let clean = new Promise(() => {
        this.newArt = {}
        this.step = 1
      })
      clean.then(this.$emit('cleanExit'))
    },
    toStep (event) { this.step = event }
  },
  components: { StepOneComponent, StepTwoComponent, StepThreeComponent },
  data () {
    return {
      step: 1,
      newArt: {}
    }
  }
}
</script>
