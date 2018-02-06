<template>
<v-dialog v-model="datePicker" persistent max-width="290" id="date-picker">
  <v-text-field
    slot="activator"
    :label="newArt.initDate ? newArt.initDate + ' ~ ' + newArt.finishDate : 'Fecha'"
    prepend-icon="event"
    readonly
  ></v-text-field>
  <v-card style="border: none;">
    <v-stepper v-model="step" class="no-shadow">
      <v-stepper-content step="1" class="p-0">
        <v-date-picker v-model="initDate" :allowedDates="{ min: thisDay }" full-width locale="es-es" class="square date-dialog"></v-date-picker>
      </v-stepper-content>
      <v-stepper-content step="2" class="p-0">
        <v-date-picker v-model="finishDate" :show-current="initDate" :allowedDates="{ min: initDate }" event-color="primary" :events="eventFunction" full-width locale="es-es" class="square date-dialog"></v-date-picker>
      </v-stepper-content>
    </v-stepper>
    <v-btn color="secondary" v-if="step === 2" @click.stop="datePicker = false" :disabled="!newArt.finishDate">Aceptar</v-btn>
    <v-btn color="primary" @click.stop="nextBack" :disabled="!newArt.initDate">{{ this.step === 1 ? 'Siguiente' : 'Volver'}}</v-btn>
    <v-btn flat v-if="step !== 2" @click.stop="cleanClose">Cancelar</v-btn>
  </v-card>
</v-dialog>
</template>
<script>
  import { format, isAfter, isBefore } from 'date-fns'

  export default {
    props: ['newArt'],
    methods: {
      eventFunction (date) { return isAfter(date, this.initDate) && isBefore(date, this.finishDate) },
      nextBack () {
        isBefore(this.finishDate, this.initDate) ? this.finishDate = this.initDate : null
        this.step === 1 ? this.step = 2 : this.step = 1
      },
      formatDate (date) { return format(date, 'DD-MM-YYYY') },
      cleanClose () {
        this.initDate = ''
        this.finishDate = ''
        this.datePicker = false
      }
    },
    watch: {
      initDate: function () { this.newArt.initDate = this.formatDate(this.initDate) },
      finishDate: function () {
        this.newArt.finishDate = this.formatDate(this.finishDate)
        this.$emit('update:newArt', this.newArt)
      }
    },
    computed: {
      today () { this.newArt.createDate = this.formatDate(new Date()) },
      thisDay () { return format(new Date(), 'YYYY-MM-DD') }
    },
    data () {
      return {
        datePicker: false,
        step: 1,
        initDate: '',
        finishDate: ''
      }
    }
  }
</script>
