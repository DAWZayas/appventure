<template>
  <div v-if="userTournaments" >
    <tournament-card v-for="userTournament in userTournaments" :tournament="tournaments[userTournament]" :key="userTournament"></tournament-card>
  </div>
  <v-alert v-else type="error" :value="true">
    ¡No te has apuntado a ningun torneo!
  </v-alert>
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
