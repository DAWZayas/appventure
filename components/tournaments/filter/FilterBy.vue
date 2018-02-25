<template>
  <div :class="flex ? 'grow' : null">
    <nav-toggler
      :filterD.sync="filterD"
      :button="button"
      :small="small"
      :color="color"
    ></nav-toggler>

    <v-navigation-drawer temporary fixed touchless right v-model="filterD">

      <top-toolbar :filterD.sync="filterD"></top-toolbar>

      <v-list dense class="p-0">
        <v-toolbar class="mb-2" flat>
          <h5 class="d-flex align-items-center p-0 pl-3">Ordenar por:</h5>
        </v-toolbar>

        <organize-menu
          :disable.sync="disable"
          :filter.sync="filter"
          :reverse.sync="reverse"
        ></organize-menu>

        <transition-group name="list-complete" tag="div">
          <div :key="0" v-if="disable" class="list-complete-item">
            <v-list-tile>
              <v-list-tile-content>
                <v-switch
                  :label="!this.reverse ? 'Ascendente' : 'Descendente'"
                  v-model="reverse"
                ></v-switch>
              </v-list-tile-content>
            </v-list-tile>
          </div>

          <div :key="1" class="list-complete-item">
            <v-toolbar flat >
              <h5 class="d-flex align-items-center p-0 pl-3">Filtrar por:</h5>
            </v-toolbar>

            <v-list-tile>
              <v-list-tile-content>
                <v-slider class="pt-2" :label="`0 - ${range} €`" v-model="range" :max="max"></v-slider><br>
              </v-list-tile-content>
            </v-list-tile>
          </div>
        </transition-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  import { NavToggler, TopToolbar, OrganizeMenu } from './components'
  import { ObjMathMax } from '~/utils/utils'
  import { reverseComparator } from '~/utils/comparators'

  export default {
    components: { NavToggler, TopToolbar, OrganizeMenu },
    props: {
      // Tournaments Props
      tournaments: { default: [], type: Array },
      arrTournaments: { default: [], type: Array },
      // Pagination Props
      paginated: { default: true, type: Boolean },
      loadMore: Boolean,
      hasMore: Boolean,
      pageSize: { default: 5, type: Number },
      // Style Props
      button: Boolean,
      small: Boolean,
      color: { default: 'primary', type: String },
      flex: { default: true, type: Boolean }
    },
    mounted: function () { this.$emit('update:tournaments', this.filterBy()) },
    methods: {
      filterBy () {
        let arrInPrize = this.arrTournaments
          .filter(obj => obj['prize'] <= this.range)

        let filtered = arrInPrize
          .sort(this.filter)

        this.loadMore
          ? (this.actualSize += this.pageSize,
            this.$emit('update:loadMore', false))
          : null

        this.hasMore
          ? this.$emit('update:hasMore', this.actualSize < arrInPrize.length)
          : null

        filtered = this.paginated ? this.hasMore
          ? filtered.slice(0, this.actualSize)
          : filtered : filtered

        return this.reverse ? filtered.reverse() : filtered
      }
    },
    computed: {
      max () { return ObjMathMax(this.arrTournaments, 'prize') },
      range: {
        get: function () { return this.max - this.prizeRange },
        set: function (val) { this.prizeRange = (this.max - val) }
      }
    },
    data () {
      return {
        actualSize: this.pageSize,
        filterD: false,
        filter: reverseComparator('key'),
        prizeRange: 0,
        reverse: false,
        disable: false
      }
    },
    watch: {
      prizeRange () { this.$emit('update:tournaments', this.filterBy()) },
      filter () { this.$emit('update:tournaments', this.filterBy()) },
      reverse () { this.$emit('update:tournaments', this.filterBy()) },
      range () { this.$emit('update:tournaments', this.filterBy()) },
      loadMore () { this.$emit('update:tournaments', this.filterBy()) }
    }
  }
</script>
<style lang="scss" scoped>
  .grow {
    flex-grow: 0!important;
  }
</style>
