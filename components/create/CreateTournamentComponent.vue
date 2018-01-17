<template>
  <div>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="step > 1">Name of step 1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step > 2">Name of step 2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Name of step 3</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content class="pt-2" step="1">
          <step-one-component @stepOne="stepOneInputs"></step-one-component>
        </v-stepper-content>

        <v-stepper-content class="pt-2" step="2">
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
      this.newArt.name = event.name
      this.newArt.description = event.description
      this.newArt.genre = event.genre
      this.newArt.category = event.category
      this.newArt.subCategory = event.subCategory
      this.newArt.level = event.level

      this.step = event.nextStep
    },
    stepTwoInputs (event) {
      this.newArt.location = event.location
      this.newArt.initDate = event.initDate
      this.newArt.createDate = event.createDate
      this.newArt.prize = event.prize
      this.newArt.gauging = event.gauging

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
