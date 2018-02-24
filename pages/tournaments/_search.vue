<template>
  <div v-if="results">
    <div class="d-flex mx-2 mt-2 mb-1 align-items-center">
      <h5 class="p-0">Resultados de la búsqueda</h5>
      <v-icon @click="filterD = !filterD" style="flex-grow: 0!important;">filter_list</v-icon>
    </div>
    {{reverse}}<v-btn @click="reverse = !reverse"></v-btn>
    <transition-group name="flip-list">
      <tournament-card v-for="tournament in filterBy(tPaginated, filter).filter(obj => obj['prize'] <= this.range)" :key="tournament['key']" :tournament="tournament"></tournament-card>
    </transition-group>
    <tournaments-pagination-component @loadMore="onLoadMore" :hasMore="hasMore"></tournaments-pagination-component>

    <v-navigation-drawer temporary fixed touchless right v-model="filterD">
      <v-toolbar color="white" flat>
        <h5 class="d-flex align-items-center p-0 pl-2"><v-icon @click="filterD = !filterD">keyboard_arrow_right</v-icon>Organizar resultados:</h5>
      </v-toolbar>
      <v-list dense class="p-0">
        <v-toolbar class="mb-2" flat>
          <h5 class="d-flex align-items-center p-0 pl-3">Ordenar por:</h5>
        </v-toolbar>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-content>
            <v-checkbox
              :disabled="disable && !item.status"
              color="primary"
              @change="filter = item.filter, disable = !disable"
              :label="item.title"
              v-model="item.status"
            ></v-checkbox>
          </v-list-tile-content>
        </v-list-tile>
        <v-toolbar flat>
          <h5 class="d-flex align-items-center p-0 pl-3">Filtrar por:</h5>
        </v-toolbar>
        <v-list-tile>
          <v-list-tile-content>
            <v-slider class="pt-2" label="Precio" v-model="range" :max="max"></v-slider><br>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <h5 class="p-0">0 - {{ range }} €</h5>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
  <v-alert v-else :value="true" type="error">
    ¡No se han encontrado resultados!
  </v-alert>
</template>
<script>
  import { TournamentCard, TournamentsPaginationComponent } from '~/components/common/tournaments'
  import speakingurl from 'speakingurl'
  import { mapGetters } from 'vuex'
  import { getArray, ObjMathMax } from '~/utils/utils'
  import { compareByPrize } from '~/utils/comparators'

  export default {
    computed: {
      ...mapGetters({ tm: 'getTournaments' }),
      tPaginated () { return this.tournaments.slice(0, this.actualSize) },
      hasMore () { return this.tournaments.length > this.actualSize },
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
      results () { return Object.keys(this.tournaments).length > 0 },
      max () { return ObjMathMax(this.tournaments) },
      range: {
        get: function () { return this.max - this.prizeRange },
        set: function (val) { this.prizeRange = (this.max - val) }
      }
    },
    methods: {
      onLoadMore () { this.actualSize = this.actualSize + this.pageSize },
      filterBy: (t, f) => f(t),
      noFilter: (t) => t,
      reverseF: (t) => t.reverse(),
      filterByPrize: (t) => t.sort(compareByPrize)
    },
    components: { TournamentCard, TournamentsPaginationComponent },
    watch: {
      reverse () {
        console.log(this.reverse)
        this.filter = this.reverseF
      }
    },
    data () {
      return {
        filterD: false,
        filter: this.noFilter,
        items: [
          { title: 'Por nombre', status: false, filter: this.filterByName },
          { title: 'Por precio', status: false, filter: this.filterByPrize },
          { title: 'Por participantes', status: false, filter: this.filterByParticipants },
          { title: 'Por fecha', status: false, filter: this.filterByDate }
        ],
        pageSize: 5,
        actualSize: 5,
        prizeRange: 0,
        reverse: false,
        disable: false
      }
    }
  }
</script>
