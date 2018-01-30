<template>
  <v-form>
    <v-text-field v-model="name" label="Nombre del torneo" required></v-text-field>
    <v-text-field v-model="description" multi-line label="Descripción del torneo" required></v-text-field>
    <v-radio-group v-model="genre" required>
      <v-radio label="Masculino" value="m"></v-radio>
      <v-radio label="Femenino" value="f"></v-radio>
      <v-radio label="Mixtos" value="mf"></v-radio>
    </v-radio-group>
    <v-select :items="categories.main" v-model="category" label="Categoría" required></v-select>
    <v-select :items="categories[category]" v-if="category !== ''" :label="categories['label'][category]" v-model="subCategory" required></v-select>
    <v-select :items="difficulty" v-model="level" label="Dificultad" required></v-select>
    <v-btn color="primary" @click="submit">Continue</v-btn>
    <v-btn flat>Cancelar</v-btn>
  </v-form>
</template>
<script>
  export default {
    methods: {
      submit () {
        this.$emit('stepOne', { name: this.name, description: this.description, genre: this.genre, category: this.category, subCategory: this.subCategory, level: this.level, nextStep: this.nextStep })
      }
    },
    data () {
      return {
        name: '',
        description: '',
        genre: '',
        category: '',
        subCategory: '',
        level: '',

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
            { text: 'Poker', value: 'poker' }
          ],
          motor: [
            { text: 'Karts', value: 'karts' },
            { text: 'Rally', value: 'rally' },
            { text: 'Motos', value: 'motos' }
          ],
          label: {
            sports: 'Deporte',
            esports: 'Videojuego',
            cardgames: 'Juego',
            motor: 'Carrera'
          }
        },
        difficulty: [
          { text: 'Principiante', value: 'Principiante' },
          { text: 'Medio', value: 'Medio' },
          { text: 'Alto', value: 'Alto' },
          { text: 'Maestro', value: 'Maestro' }
        ],

        nextStep: 2
      }
    }
  }
</script>
