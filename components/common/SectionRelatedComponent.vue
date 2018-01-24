<template>
  <section class="d-flex flex-column">
    <h5>Relacionado con tus gustos</h5>
    <section class="d-flex slide">
      <article-tournament-component v-for="(tournament , key) in tournamentsDisplay" :key="key" :tournament="tournament" :id="tournament['key']"></article-tournament-component>
      <show-more-component></show-more-component>
    </section>
  </section>
</template>
<script>
  import { ArticleTournamentComponent, ShowMoreComponent } from '~/components/common'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ArticleTournamentComponent,
      ShowMoreComponent
    },
    computed: {
      ...mapGetters({ tournaments: 'getArrayTournaments' }),
      tournamentsDisplay: function () {
        return this.tournaments.slice(0, 8)
      }
    }
  }
</script>
<style scoped>
  .slide {
    overflow-x: scroll;
  }
  h5 {
    margin: 0;
    padding: .5em 1em 0;
    color: #757575
  }
</style>
