<template>
  <section class="flex slide-top">
    <h3>Torneos cerca de ti</h3>
    <section class="flex slide">
      <p></p>
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
          }
        ]
      }
    },
    components: {
      ArticleTournamentComponent
    }
  }
</script>
<style>
  h3 {
    padding: .5em;
  }
  .flex {
      display: flex;
  }
  .slide-top {
    background-color: white;
    flex-direction: column; 
  }
  .slide {
    overflow-x: scroll;
  }
  div > article {
    margin: 1em;
    padding-right: 1.5em;
    padding-left: 1.5em;
    padding: 1em;
    border-radius: 0.20em;
    flex-direction: column;
    cursor: pointer;
    display: flex;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  }
</style>
