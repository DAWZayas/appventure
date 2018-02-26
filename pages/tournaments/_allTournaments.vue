<template>
  <tournaments-pagination :arrayTournaments="tournaments" :headline="'Todos los torneos'"></tournaments-pagination>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { TournamentsPagination } from '~/components/tournaments/pagination'

  export default {
    computed: { ...mapGetters({ tournaments: 'getArrayTournaments' }) },
    components: { TournamentsPagination }
  }
</script>
