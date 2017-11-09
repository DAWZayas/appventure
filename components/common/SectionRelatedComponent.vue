<template>
    <div class="row">
      <hr>
      <tag-tournament-component v-for="tournament in tournaments" :key="tournament.key" :tournament="tournament"></tag-tournament-component>
    </div>
</template>
<script>
  import { TagTournamentComponent } from '~/components/common'

  export default {
    data () {
      return {
        tournaments: [
          {
            sport: 'Parapente',
            src: require('~/assets/images/sports/parapente.jpg'),
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: require('~/assets/images/sports/parapente.jpg'),
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: require('~/assets/images/sports/parapente.jpg'),
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: require('~/assets/images/sports/parapente.jpg'),
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          }
        ]
      }
    },
    components: {
      'tag-tournament-component': TagTournamentComponent
    }
  }
</script>
<style scoped>
  .related-tnm {
    background-color: #fff;
    margin-bottom: 2rem;
  }
  hr {
    border-bottom: 1px solid #BDBDBD;
  }
</style>
