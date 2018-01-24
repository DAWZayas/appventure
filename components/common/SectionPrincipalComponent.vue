<template>
  <section>
    <h5>Torneos cerca de ti</h5>
    <section class="d-flex slide">
      <article-tournament-component v-for="(tournament, key) in tournamentsDisplay" :key="key" :tournament="tournament" :id="tournament['key']"></article-tournament-component>
      <nuxt-link to="/moreTournaments"><show-more-component></show-more-component></nuxt-link>
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
  .slide-top {
    background-color: white;
  }
  .slide {
    overflow-x: scroll;
  }
</style>
