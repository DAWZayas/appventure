<template>
  <div v-if="results">
    <transition-group name="flip-list">
    <tournament-card v-for="tournament in filterBy(tPaginated, filter)" :key="tournament['key']" :tournament="tournament"></tournament-card>
    </transition-group>
    <tournaments-pagination-component @loadMore="onLoadMore" :hasMore="hasMore"></tournaments-pagination-component>
    <v-btn @click="filter = filterByPrize" color="primary">Filtrar por precio (Ascendente)</v-btn>
  </div>
  <v-alert v-else :value="true" type="error">
    ¡No se han encontrado resultados!
  </v-alert>
</template>
<script>
  import { TournamentCard, TournamentsPaginationComponent } from '~/components/common/tournaments'
  import speakingurl from 'speakingurl'
  import { mapGetters } from 'vuex'
  import { getArray } from '~/utils/utils'
  import { compareByPrize } from '~/utils/comparators'

  export default {
    computed: {
      ...mapGetters({ tm: 'getTournaments' }),
      tPaginated () { return this.tournaments.slice(0, this.actualTournamentsSize) },
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
        return getArray(tournaments)
      },
      results () { return Object.keys(this.tournaments).length > 0 }
    },
    methods: {
      onLoadMore () { this.actualTournamentsSize = this.actualTournamentsSize + this.pageSize },
      filterBy (t, f) { return f(t) },
      noFilter: (t) => t,
      filterByPrize: (t) => t.sort(compareByPrize)
    },
    components: { TournamentCard, TournamentsPaginationComponent },
    data () {
      return {
        filter: this.noFilter,
        pageSize: 5,
        actualTournamentsSize: 5
      }
    }
  }
</script>
