<template>
  <v-form>
    <v-text-field v-model="location" label="Lugar del torneo" required></v-text-field>
    
    <v-dialog
      v-model="modal"
      lazy
      full-width
      width="290px"
    >
      <v-text-field
        slot="activator"
        label="Fecha"
        v-model="initDate"
        prepend-icon="event"
        readonly
      ></v-text-field>
      <v-date-picker v-model="initDate" scrollable actions>
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
export default {
  methods: {
    submit () {
      this.$emit('stepTwo', { location: this.location, initDate: this.initDate, createDate: this.getDate(), prize: this.prize, gauging: this.gauging, nextStep: this.nextStep })
    },
    getDate () {
      var today = new Date()
      var dd = today.getDate()
      var mm = today.getMonth() + 1
      var yyyy = today.getFullYear()

      dd < 10 ? dd = '0' + dd : dd
      mm < 10 ? mm = '0' + mm : mm

      return (dd + '/' + mm + '/' + yyyy)
    }
  },
  data () {
    return {
      modal: 'false',
      menu: '',

      location: '',
      initDate: '',
      createDate: '',
      prize: '',
      gauging: '',

      nextStep: 3
    }
  }
}
</script>
