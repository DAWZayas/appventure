<template>
  <div>
    <section>
      <h5>Torneos cerca de ti</h5>
      <v-container fill-height class="py-0 mt-2">
        <v-layout align-center>
          <img style="width: 100%; overflow:hidden;" src="http://images.etn.eltiempo.digital/files/article_main/files/crop/uploads/2018/01/15/5a5ccc121a381.r_1518986819330.0-0-3000-1500.jpeg">
        </v-layout>
      </v-container>
      <section class="d-flex slide">
        <article-tournament-component v-for="(tournament, key) in tournamentsDisplay" :key="key" :tournament="tournament" :id="tournament['key']"></article-tournament-component>
        <nuxt-link to="/moreTournaments"><show-more-component></show-more-component></nuxt-link>
      </section>
    </section>
  </div>
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
      ...mapGetters({ tournaments: 'getArrayTournaments', userLocation: 'getUserLocation' }),
      tournamentsDisplay () {
        var xs = []

        for (let i = 0; i < this.tournaments.length; i++) {
          let latUp = this.tournaments[i].location.position.lat + 0.15
          let latDown = this.tournaments[i].location.position.lat - 0.15
          let lngUp = this.tournaments[i].location.position.lng + 0.15
          let lngDown = this.tournaments[i].location.position.lng - 0.15
          if (this.userLocation.lat < latUp && this.userLocation.lat > latDown && this.userLocation.lng < lngUp && this.userLocation.lng > lngDown) {
            xs.push(this.tournaments[i])
          }
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
