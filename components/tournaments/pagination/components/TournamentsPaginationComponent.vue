<template>
  <v-btn block flat color="primary"  @click="loadMore">Ver más</v-btn>
</template>
<script>
  export default { methods: { loadMore () { this.$emit('loadMore') } } }
</script>
