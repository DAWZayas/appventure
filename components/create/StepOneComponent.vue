<template>
  <v-form>
    <v-text-field v-model="name" label="Nombre del torneo" required></v-text-field>
    <v-text-field v-model="location" label="Lugar del torneo" required></v-text-field>
    <v-text-field v-model="gauging" type="number" label="Cantidad de participantes" max="1000" required></v-text-field>
    <v-text-field v-model="prize" type="number" label="Precio por persona" max="100" required></v-text-field>
    <v-select :items="difficulty" v-model="level" label="Dificultad" required></v-select>
    <v-btn color="primary" @click="submit">Continue</v-btn>
    <v-btn flat>Cancelar</v-btn>
  </v-form>
</template>
<script>
  export default {
    methods: {
      submit () {
        this.$emit('stepOne', { name: this.name, location: this.location, gauging: this.gauging, prize: this.prize, level: this.level, nextStep: this.nextStep })
      }
    },
    data () {
      return {
        difficulty: [
          { text: 'Principiante', value: 'Principiante' },
          { text: 'Medio', value: 'Medio' },
          { text: 'Alto', value: 'Alto' },
          { text: 'Maestro', value: 'Maestro' }
        ],
        name: '',
        location: '',
        gauging: '',
        prize: '',
        level: '',
        nextStep: 2
      }
    }
  }
</script>
