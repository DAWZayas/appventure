<template>
<v-dialog max-width="290">
  <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
  <v-card style="border: none;">
    <v-stepper v-model="step" class="no-shadow">
      <v-stepper-content step="1" class="p-0">
        <v-date-picker v-model="initDate" full-width locale="es-es" class="square date-dialog"></v-date-picker>
      </v-stepper-content>
      <v-stepper-content step="2" class="p-0">
        <v-date-picker v-model="finishDate" full-width locale="es-es" class="square date-dialog"></v-date-picker>
      </v-stepper-content>
    </v-stepper>
    <v-btn color="primary" @click="nextBack">{{ this.step === 1 ? 'Siguiente' : 'Volver' }}</v-btn>
    <v-btn flat>Cancel</v-btn>
  </v-card>
</v-dialog>
</template>
<script>
  import { format } from 'date-fns'

  export default {
    methods: {
      getDate () { return format(new Date(), 'DD-MM-YYYY') },
      formatDate () { return this.initDate.split('-').reverse().join('-') },
      nextBack () { this.step === 1 ? this.step = 2 : this.step = 1 }
    },
    data () {
      return {
        initDate: '',
        finishDate: '',
        createDate: '',
        step: 1
      }
    }
  }
</script>
