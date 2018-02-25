<template>
  <div v-if="results">
    <div class="d-flex mx-2 mt-2 mb-1 align-items-center">
      <h5 class="p-0">Resultados de la búsqueda</h5>

      <filter-by
        :tournaments.sync="tournaments"
        :arrTournaments="arrayTournaments"
        :hasMore.sync="hasMore"
        :loadMore.sync="loadMore"
      ></filter-by>
    </div>

    <transition-group name="flip-list" mode="out-in" tag="div">
      <tournament-card
        class="flip-list-item"
        v-for="tournament in tournaments"
        :key="tournament['key']"
        :tournament="tournament"
      ></tournament-card>
    </transition-group>

    <tournaments-pagination-component
      @loadMore="loadMore = true"
      v-if="hasMore"
    ></tournaments-pagination-component>
  </div>

  <v-alert v-else :value="true" type="error">
    ¡No se han encontrado resultados!
  </v-alert>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { getArray } from '~/utils/utils'
  import { TournamentCard, TournamentsPaginationComponent } from '~/components/common/tournaments'

  export default {
    computed: {
      ...mapGetters({ tm: 'getTournaments' }),
      arrayTournaments () { return getArray(this.tm).reverse() },
      results () { return Object.keys(this.arrayTournaments).length > 0 }
    },
    components: { TournamentCard, TournamentsPaginationComponent },
    data () {
      return {
        loadMore: false,
        hasMore: true,
        tournaments: []
      }
    }
  }
</script>
