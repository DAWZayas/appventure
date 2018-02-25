<template>
  <tournaments-pagination :arrayTournaments="tournaments" :headline="'Todos los torneos'"></tournaments-pagination>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default { computed: { ...mapGetters({ tournaments: 'getArrayTournaments' }) } }
</script>
