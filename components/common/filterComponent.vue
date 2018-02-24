<template>
  <div>
    <v-icon @click="filterD = !filterD">filter_list</v-icon>
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
              @change="filter === item.comparator ? filter = byKey : filter = item.comparator,
                       disable = !disable,
                       reverse ? reverse = !reverse : null"
              :label="item.title"
              v-model="item.status"
            ></v-checkbox>
          </v-list-tile-content>
        </v-list-tile>
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
  import { getArray, ObjMathMax } from '~/utils/utils'
  import { genericComparator, reverseComparator, compareByDate } from '~/utils/comparators'

  export default {
    props: ['tournaments'],
    computed: {
      max () { return ObjMathMax(this.tournaments, 'prize') },
      range: {
        get: function () { return this.max - this.prizeRange },
        set: function (val) { this.prizeRange = (this.max - val) }
      }
    },
    methods: {
      filterBy () {
        let filtered = this.tournaments
          .filter(obj => obj['prize'] <= this.range)
          .sort(this.filter)

        return this.reverse ? filtered.reverse() : filtered
      }
    },
    data () {
      return {
        filterD: false,
        byKey: reverseComparator('key'),
        filter: reverseComparator('key'),
        items: [
          { title: 'Por nombre', status: false, comparator: genericComparator('name') },
          { title: 'Por fecha', status: false, comparator: compareByDate },
          { title: 'Por precio', status: false, comparator: genericComparator('prize') },
          { title: 'Por participantes', status: false, comparator: genericComparator('participants') }
        ],
        prizeRange: 0,
        reverse: false,
        disable: false
      }
    }
  }
</script>
