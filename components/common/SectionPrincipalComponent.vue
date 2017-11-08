<template>
  <section class="d-flex flex-column slide-top">
    <h3>Torneos cerca de ti</h3>
    <section class="d-flex slide">
      <article-tournament-component v-for="tournament in tournaments" :key="tournament.strong" :tournament="tournament"></article-tournament-component>
    </section>
  </section>
</template>
<script>
  import { ArticleTournamentComponent } from '~/components/common'

  export default {
    data () {
      return {
        tournaments: [
          {
            strong: 'Padel',
            src: require('../../assets/images/torneos/torneopadel.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'e-Sports',
            src: require('../../assets/images/torneos/torneoe-sports.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'Poker',
            src: require('../../assets/images/torneos/torneopoker.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'Futbol',
            src: require('../../assets/images/torneos/torneofutbol.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'Padel',
            src: require('../../assets/images/torneos/torneopadel.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'e-Sports',
            src: require('../../assets/images/torneos/torneoe-sports.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'Poker',
            src: require('../../assets/images/torneos/torneopoker.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'Padel',
            src: require('../../assets/images/torneos/torneopadel.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'e-Sports',
            src: require('../../assets/images/torneos/torneoe-sports.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          },
          {
            strong: 'Poker',
            src: require('../../assets/images/torneos/torneopoker.jpg'),
            location: 'Majadahonda',
            level: 'Principiante'
          }
        ]
      }
    },
    components: {
      ArticleTournamentComponent
    }
  }
</script>
<style scoped>
  h3 {
    padding: .5em .5em 0;
  }
  .slide-top {
    background-color: white;
  }
  .slide {
    overflow-x: scroll;
  }
</style>
