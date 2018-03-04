<template>
  <tournaments-filtered></tournaments-filtered>
</template>
<script>
  import { TournamentsFiltered } from '~/components/common'
  import { mapMutations } from 'vuex'

  export default {
    methods: { ...mapMutations(['setFilteredTournaments']) },
    beforeDestroy () { this.setFilteredTournaments({}) },
    components: { TournamentsFiltered }
  }
</script>
