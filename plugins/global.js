/**
 * Declare global components here
 */

import Vue from 'vue'
import FilterBy from '~/components/tournaments/filter/FilterBy.vue'
import FilterButtonComponent from '~/components/tournaments/filter/FilterButtonComponent.vue'
import TournamentsPagination from '~/components/tournaments/pagination/TournamentsPagination.vue'

Vue.component('filter-by', FilterBy)
Vue.component('filter-button-component', FilterButtonComponent)
Vue.component('tournaments-pagination', TournamentsPagination)
