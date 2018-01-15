<template>
  <div>
    <v-stepper v-model="step">
      <v-stepper-header>
        <div v-for="n in 3" :key="n">
          <v-stepper-step
            :step="n"
            :complete="step > n"
          >
            Step {{ n }}
          </v-stepper-step>
          <v-divider v-if="n !== 3" :key="n"></v-divider>
        </div>
      </v-stepper-header>
      <v-stepper-items>
        
        <v-stepper-content step="1">
          <step-one-component @stepOne="stepOneInputs"></step-one-component>
        </v-stepper-content>

        <v-stepper-content step="2">
          <step-two-component @stepTwo="stepTwoInputs"></step-two-component>      
        </v-stepper-content>

        <v-stepper-content step="3">
          <step-three-component :newArt="newArt"></step-three-component>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import { StepOneComponent, StepTwoComponent, StepThreeComponent } from '~/components/create'

export default {
  methods: {
    stepOneInputs (event) {
      this.newArt.strong = event.name

      this.newArt.name = event.name
      this.newArt.location = event.location
      this.newArt.gauging = event.gauging
      this.newArt.prize = event.prize
      this.newArt.level = event.level
      this.step = event.nextStep
    },
    stepTwoInputs (event) {
      this.newArt.src = event.category

      this.newArt.genre = event.genre
      this.newArt.category = event.category
      this.step = event.nextStep
    }
  },
  components: {
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  },
  data () {
    return {
      step: 1,

      newArt: {
        // Temporary data
        strong: '',
        src: '',
        // Final data
        name: '',
        location: '',
        gauging: '',
        prize: '',
        level: '',
        genre: '',
        category: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .stepper {
    box-shadow: none!important;
  }
</style>
