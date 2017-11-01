<template>
<div>
  <article v-for="tournament in tournaments" :key="tournament.strong">
    <strong>{{ tournament.strong }}</strong>
    <img :src="tournament.src" >
    {{ tournament.location }}
    {{ tournament.level }}
  </article>
</div>
</template>
<script>
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
    }
  }
</script>
