<template>
  <div>
    <tournament-details :tournament="tournaments[this.id]"></tournament-details>
  </div>
</template>
<script>
  import { TournamentDetails } from '~/components/common/tournaments'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    components: {
      TournamentDetails
    },
    computed: {
      ...mapGetters({ tournaments: 'getTournaments' })
    }
  }
</script>
