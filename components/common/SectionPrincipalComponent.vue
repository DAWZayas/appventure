<template>
  <section class="d-flex flex-column slide-top">
    <h5>Torneos cerca de ti</h5>
    <section class="d-flex slide">
      <article-tournament-component v-for="(tournament , key) in tournaments" :key="key" :tournament="tournament" :id="key"></article-tournament-component>
    </section>
  </section>
</template>
<script>
  import { ArticleTournamentComponent } from '~/components/common'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ArticleTournamentComponent
    },
    computed: {
      ...mapGetters({
        tournaments: 'getTournaments'
      })
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
  h5 {
    margin: 0;
    padding: .5em 1em 0;
    color: #757575
  }
</style>
