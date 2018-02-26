<template>
  <tournaments-pagination :arrayTournaments="tournaments"></tournaments-pagination>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { TournamentsPagination } from '~/components/tournaments/pagination'

  export default {
    computed: { ...mapGetters({ tournaments: 'getFilteredTournaments' }) },
    components: { TournamentsPagination }
  }
</script>
