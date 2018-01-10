<template>

</template>
<script>
  export default {
    props: ['n'],
    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      }
    },
    data () {
      return {
        input: null,
        imageSrc: [],
        e1: 1,
        steps: 3,
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
        difficulty: [
          { text: 'Principiante', value: 'Principiante' },
          { text: 'Medio', value: 'Medio' },
          { text: 'Alto', value: 'Alto' },
          { text: 'Maestro', value: 'Maestro' }
        ],
        selected: '',
        name: '',
        location: '',
        level: '',
        confirm: false
      }
    }
  }</script>
