<template>
  <div>
    <tournament-details :tournament="tournaments[id]"></tournament-details>
  </div>
</template>
<script>
  import { TournamentDetails } from '~/components/common/tournaments'
  import { mapGetters } from 'vuex'

  export default {
    // middleware: 'slug',
    data () { return { id: this.$route.params.id } },
    computed: { ...mapGetters({ tournaments: 'getTournaments' }) },
    components: { TournamentDetails }
  }
</script>
