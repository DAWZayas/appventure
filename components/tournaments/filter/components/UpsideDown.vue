<template>
  <div>
    <v-list-tile>
      <v-list-tile-content>
        <v-switch
          :label="!reverse ? 'Ascendente' : 'Descendente'"
          v-model="isReverse"
          @change="flip"
        ></v-switch>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>
<script>
  export default {
    props: ['reverse'],
    methods: { flip () { this.$emit('update:reverse', this.isReverse) } },
    data () { return { isReverse: this.reverse } }
  }
</script>
