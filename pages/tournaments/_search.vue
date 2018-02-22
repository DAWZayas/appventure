<template>
  <div v-if="results">
    <tournament-card v-for="(tournament , key) in tournaments" :key="key" :tournament="tournament" :id="tournament['key']"></tournament-card>
    <tournaments-pagination-component @loadMore="onLoadMore" :hasMore="hasMore"></tournaments-pagination-component>
  </div>
  <v-alert v-else :value="true" type="error">
    ¡No se han encontrado resultados!
  </v-alert>
</template>
<script>
  import { TournamentCard, TournamentsPaginationComponent } from '~/components/common/tournaments'
  import speakingurl from 'speakingurl'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({ tm: 'getTournaments' }),
      tournamentsToDispalyPaginated () { return this.tournaments.slice(0, this.actualTournamentsSize) },
      hasMore () { return this.tournaments.length > this.actualTournamentsSize },
      tournaments () {
        var tournaments = {}

        for (var t in this.tm) {
          var lok = this.tm[t]['location']
          var info = this.tm[t]['description'] + ' ' +
                     this.tm[t]['name'] + ' ' +
                     this.tm[t]['category'] + ' ' +
                     this.tm[t]['subCategory'] + ' ' +
                     lok['administrative_area_level_1'] + ' ' +
                     lok['country'] + ' ' + lok['locality'] + ' ' +
                     lok['name'] + ' ' +
                     lok['route']

          speakingurl(info).search(this.$route.query.q) > -1 ? tournaments[t] = this.tm[t] : null
        }
        return tournaments
      },
      results () { return Object.keys(this.tournaments).length > 0 }
    },
    methods: {
      onLoadMore () { this.actualTournamentsSize = this.actualTournamentsSize + this.pageSize }
    },
    components: { TournamentCard, TournamentsPaginationComponent },
    data () {
      return {
        pageSize: 5,
        actualTournamentsSize: 5
      }
    }
  }
</script>
