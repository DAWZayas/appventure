<template>
  <div>
    <tournament-card v-for="userTournament in userTournaments" :tournament="tournaments[userTournament]" :key="userTournament"></tournament-card>
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
      ...mapGetters({ tournaments: 'getTournaments', userTournaments: 'getUserTournaments' })
    }
  }
</script>
