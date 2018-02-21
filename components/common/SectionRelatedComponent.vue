<template>
  <section class="d-flex flex-column">
    <h5>Relacionado con tus gustos</h5>
    <section class="d-flex slide">
      <article-tournament-component v-for="tournament in tournamentsDisplay" :key="tournament.key" :tournament="tournament" :id="tournament['key']"></article-tournament-component>
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
      ...mapGetters({ tournaments: 'getArrayTournaments', participating: 'getParticipating' }),
      tournamentsDisplay () {
        var xs = []
        var count = { motor: 0, cardgames: 0, sports: 0, esports: 0 }
        var max = 0
        var max2 = 0
        var maxCategory
        var maxCategory2
        var size = 0

        for (let i in this.participating) {
          this.participating[i] === 'motor' ? count.motor++ : this.participating[i] === 'cardgames' ? count.cardgames++ : this.participating[i] === 'sports' ? count.sports++ : count.esports++
          size++
        }
        if (size) {
          for (let i in count) {
            count[i] > max ? (max = count[i], maxCategory = i) : null
          }
          for (let i in count) {
            count[i] > max2 && count[i] < max ? (max2 = count[i], maxCategory2 = i) : null
          }
          for (let i = 0; i < this.tournaments.length; i++) {
            this.tournaments[i].category === maxCategory || this.tournaments[i].category === maxCategory2 ? xs.push(this.tournaments[i]) : null
          }
          for (let i = xs.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            var temp = xs[i]
            xs[i] = xs[j]
            xs[j] = temp
          }
          return xs.slice(0, 8)
        } else {
          return this.tournaments
        }
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
