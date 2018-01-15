<template>
  <v-form>
    <v-radio-group v-model="genre" required>
      <v-radio label="Masculino" value="m"></v-radio>
      <v-radio label="Femenino" value="f"></v-radio>
      <v-radio label="Mixtos" value="mf"></v-radio>
    </v-radio-group>
    <v-select :items="categories.main" v-model="category" label="Categoría" required></v-select>
    <v-select :items="categories[category]" v-if="category !== ''" :label="categories['label'][category]" required></v-select>
    <v-btn color="primary" @click="submit">Continue</v-btn>
    <v-btn flat>Cancelar</v-btn>  
  </v-form>
</template>
<script>
export default {
  methods: {
    submit () {
      this.$emit('stepTwo', { genre: this.genre, category: this.category, nextStep: this.nextStep })
    }
  },
  data () {
    return {
      categories: {
        main: [
          { text: 'Deportes', value: 'sports' },
          { text: 'e-Sports', value: 'esports' },
          { text: 'Juegos de cartas', value: 'cardgames' },
          { text: 'Motor', value: 'motor' }
        ],
        sports: [
          { text: 'Fútbol', value: 'football' },
          { text: 'Baloncesto', value: 'basketball' },
          { text: 'Padel', value: 'padel' },
          { text: 'Golf', value: 'golf' }
        ],
        esports: [
          { text: 'League of Legends', value: 'lol-esport' },
          { text: 'CSGO', value: 'csgo' },
          { text: 'Dota 2', value: 'dota2' },
          { text: 'FIFA', value: 'fifa-esport' }
        ],
        cardgames: [
          { text: 'Poker', value: 'Poker' }
        ],
        motor: [
          { text: 'Karts', value: 'Karts' },
          { text: 'Rally', value: 'Rally' },
          { text: 'Motos', value: 'Motos' }
        ],
        label: {
          sports: 'Deporte',
          esports: 'Videojuego',
          cardgames: 'Juego',
          motor: 'Carrera'
        }
      },
      category: '',
      genre: '',
      nextStep: 3
    }
  }
}
</script>
