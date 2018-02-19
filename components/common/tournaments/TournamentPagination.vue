<template>
  <div>
    <tournament-card v-for="(tournament , key) in tournamentsToDispalyPaginated" :key="key" :tournament="tournament" :id="tournament['key']"></tournament-card>
    <tournaments-pagination-component @loadMore="onLoadMore" :hasMore="hasMore"></tournaments-pagination-component>
  </div>
</template>
<script>
  import { TournamentCard, TournamentsPaginationComponent } from '~/components/common/tournaments'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        pageSize: 5,
        actualTournamentsSize: 5
      }
    },
    components: {
      TournamentCard,
      TournamentsPaginationComponent
    },
    computed: {
      ...mapGetters({ tournaments: 'getArrayTournaments' }),
      tournamentsToDispalyPaginated () {
        return this.tournaments.slice(0, this.actualTournamentsSize)
      },
      hasMore () {
        return this.tournaments.length > this.actualTournamentsSize
      }
    },
    methods: {
      onLoadMore () {
        this.actualTournamentsSize = this.actualTournamentsSize + this.pageSize
      }
    }
  }
</script>
