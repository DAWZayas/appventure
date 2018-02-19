<template>
  <div>
    <tournament-details :tournament="tournament"></tournament-details>
  </div>
</template>
<script>
  import { TournamentDetails } from '~/components/common/tournaments'

  export default {
    computed: { tournament () { return this.$store.getters.getSingleTournament(this.$route.params) } },
    components: { TournamentDetails }
  }
</script>
