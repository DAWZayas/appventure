<template>
  <div>
    <v-toolbar flat>
      <h5 class="d-flex align-items-center p-0 pl-3">Filtrar por:</h5>
    </v-toolbar>

    <v-list-tile>
      <v-list-tile-content>
        <v-slider class="pt-2" :label="`0 - ${localRange} €`" v-model="localRange" :max="max"></v-slider><br>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>
<script>
  export default {
    props: ['range', 'max', 'categories', 'category'],
    watch: { localRange () { this.$emit('update:range', this.localRange) } },
    data () { return { localRange: this.range } }
  }
</script>
