<template>
  <div>
    <h5>Relacionado con tus gustos</h5>
    <div class="d-flex slide">
      <article-tournament-component v-for="sport in sports" :key="sport.key" :tournament="sport"></article-tournament-component>
    </div>
  </div>
</template>
<script>
  import ArticleTournamentComponent from '~/components/common/ArticleTournamentComponent'

  export default {
    data () {
      return {
        sports: [
          {
            sport: 'Parapente',
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            src: 'esports',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            src: 'esports',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            src: 'esports',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            src: 'esports',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
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
  div {
    margin: 0;
  }
  .related-tnm {
    background-color: #fff;
    margin-bottom: 2rem;
  }
  hr {
    border-bottom: 1px solid #BDBDBD;
  }
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
