<template>
  <div>
    <v-list-tile v-for="item in items" :key="item.title">
      <v-list-tile-content>
        <v-checkbox
          :disabled="disable && !item.status"
          color="primary"
          @change="changeFilter(item)"
          :label="item.title"
          v-model="item.status"
        ></v-checkbox>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>
<script>
  import { genericComparator, reverseComparator, compareByDate } from '~/utils/comparators'

  export default {
    props: ['disable', 'filter', 'reverse'],
    data () {
      return {
        items: [
          { title: 'Por nombre', status: false, comparator: genericComparator('name') },
          { title: 'Por fecha', status: false, comparator: compareByDate },
          { title: 'Por precio', status: false, comparator: genericComparator('prize') },
          { title: 'Por participantes', status: false, comparator: genericComparator('participants') }
        ],
        byKey: reverseComparator('key')
      }
    },
    methods: {
      changeFilter (item) {
        this.filter === item.comparator
          ? this.$emit('update:filter', this.byKey)
          : this.$emit('update:filter', item.comparator)

        this.$emit('update:disable', !this.disable)

        this.reverse
          ? this.$emit('update:reverse', !this.reverse)
          : null
      }
    }
  }
</script>
