<template>
  <v-btn block flat color="primary"  @click="onLoadMore" v-show="hasMore">Ver más</v-btn>
</template>
<script>
  export default {
    props: ['hasMore'],
    methods: {
      onLoadMore () {
        this.$emit('loadMore')
      }
    }
  }
</script>
