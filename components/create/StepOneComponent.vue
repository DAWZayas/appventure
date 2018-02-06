<template>
  <v-form>
    <v-text-field v-model="newArt.name" label="Nombre del torneo" required></v-text-field>
    <v-text-field v-model="newArt.description" multi-line label="Descripción del torneo" required></v-text-field>
    <v-radio-group v-model="newArt.genre" required>
      <v-radio label="Masculino" value="m"></v-radio>
      <v-radio label="Femenino" value="f"></v-radio>
      <v-radio label="Mixtos" value="mf"></v-radio>
    </v-radio-group>
    <v-select :items="categories.main" v-model="newArt.category" label="Categoría" required></v-select>
    <v-select :items="categories[newArt.category]" v-if="newArt.category" :label="categories['label'][newArt.category]" v-model="newArt.subCategory" required></v-select>
    <v-select :items="difficulty" v-model="newArt.level" label="Dificultad" required></v-select>
    <v-btn color="primary" @click.stop="submit">Siguiente</v-btn>
  </v-form>
</template>
<script>
  export default {
    props: ['newArt'],
    methods: {
      toStep (step) { this.$emit('toStep', step) },
      submit () {
        this.$emit('update:newArt', this.newArt)
        this.toStep(2)
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
        ]
      }
    }
  }
</script>
