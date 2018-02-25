<template>
  <tournaments-pagination :arrayTournaments="tournaments"></tournaments-pagination>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default { computed: { ...mapGetters({ tournaments: 'getFilteredTournaments' }) } }
</script>
