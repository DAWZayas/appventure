<template>
  <div>
    <tournament-details :tournament="tournaments[this.id]"></tournament-details>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { TournamentDetails, FooterComponent } from '~/components/common'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    components: {
      TournamentDetails,
      FooterComponent
    },
    computed: {
      ...mapGetters({
        tournaments: 'getTournaments'
      })
    },
    created () {
      console.log(this.tournaments)
    }
  }
</script>
