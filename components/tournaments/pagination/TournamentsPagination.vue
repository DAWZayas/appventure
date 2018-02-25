<template>
  <div v-if="results">
    <div class="d-flex mx-2 mt-2 mb-1 align-items-center">
      <h5 class="p-0">{{ headline }}</h5>

      <filter-by
        :tournaments.sync="tournaments"
        :arrTournaments="arrayTournaments"
        :hasMore.sync="hasMore"
        :loadMore.sync="loadMore"
        :pageSize="pageSize"
        :categories="categories"
        :button="button"
        :small="small"
        :color="color"
        :flex="flex"
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
  import { TournamentsPaginationComponent } from './components'
  import { TournamentCard } from '../cards/cards'
  import { FilterBy } from '../filter'

  export default {
    props: {
      // Tournaments Props
      headline: { default: 'Resultados de la búsqueda', type: String },
      arrayTournaments: { default: [], type: Array },
      // Pagination Props
      paginated: { default: true, type: Boolean },
      pageSize: { default: 5, type: Number },
      // Filter Props
      categories: Boolean,
      // Style Props
      button: Boolean,
      small: Boolean,
      color: { default: 'primary', type: String },
      flex: { default: true, type: Boolean }
    },
    components: { TournamentCard, TournamentsPaginationComponent, FilterBy },
    computed: { results () { return Object.keys(this.arrayTournaments).length > 0 } },
    data () {
      return {
        loadMore: false,
        hasMore: true,
        tournaments: []
      }
    }
  }
</script>
