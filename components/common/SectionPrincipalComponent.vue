<template>
  <section>
    <h5>Torneos cerca de ti</h5>
    <section class="d-flex slide">
      <article-tournament-component v-for="(tournament , key) in tournaments" :key="key" :tournament="tournament" :id="key"></article-tournament-component>
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
      ...mapGetters({ tournaments: 'getTournaments' })
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
