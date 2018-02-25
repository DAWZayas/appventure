<template>
  <div>
    <section>
      <h5>Torneos cerca de ti</h5>
      <section class="d-flex slide">
        <article-tournament-component v-for="tournament in tournamentsDisplay" :key="tournament.key" :tournament="tournament"></article-tournament-component>
        <show-more-component></show-more-component>
      </section>
    </section>
  </div>
</template>
<script>
  import { ArticleTournamentComponent, ShowMoreComponent } from '~/components/tournaments/cards/index'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ArticleTournamentComponent,
      ShowMoreComponent
    },
    computed: {
      ...mapGetters({ tournaments: 'getArrayTournaments', userLocation: 'getUserLocation' }),
      tournamentsDisplay () {
        var xs = []

        for (let i = 0; i < this.tournaments.length; i++) {
          const x = Math.pow((this.tournaments[i].location.position.lat - this.userLocation.lat), 2)
          const y = Math.pow((this.tournaments[i].location.position.lng - this.userLocation.lng), 2)

          if (x + y < 0.05) { xs.push(this.tournaments[i]) }
        }

        for (let i = xs.length - 1; i > 1; i--) {
          let j = Math.floor(Math.random() * (i + 1))
          var temp = xs[i]
          xs[i] = xs[j]
          xs[j] = temp
        }

        return xs.slice(0, 8)
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
