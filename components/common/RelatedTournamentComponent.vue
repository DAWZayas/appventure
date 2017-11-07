<template>
  <section class="related-tnm p-lg-2 section extra-margins text-center pb-3">
    <div class="row">
      <tag-tournament-component v-for="tournament in tournaments" :key="tournament.key" :tournament="tournament"></tag-tournament-component>
    </div>
  </section>
</template>
<script>
  import { TagTournamentComponent } from '~/components/common'

  export default {
    data () {
      return {
        tournaments: [
          {
            sport: 'Parapente',
            src: 'http://conceptodefinicion.de/wp-content/uploads/2017/06/Parapente.jpg',
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: 'http://conceptodefinicion.de/wp-content/uploads/2017/06/Parapente.jpg',
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: 'http://conceptodefinicion.de/wp-content/uploads/2017/06/Parapente.jpg',
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: 'http://conceptodefinicion.de/wp-content/uploads/2017/06/Parapente.jpg',
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
      TagTournamentComponent
    }
  }
</script>
<style>
  .related-tnm {
    background-color: #fff;
    margin-bottom: 2rem;
  }
</style>
