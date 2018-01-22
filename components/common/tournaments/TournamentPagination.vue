<template>
  <div>
    <tournament-card  v-for="(tournament , key) in tournaments" :key="key" :tournament="tournament" :id="key"></tournament-card>
  </div>
</template>
<script>
  import { TournamentCard } from '~/components/userTournaments'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      TournamentCard
    },
    computed: {
      ...mapGetters({ tournaments: 'getTournaments' })
    }
  }
</script>
