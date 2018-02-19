<template>
  <div>
    <tournament-details :tournament="tournaments[id]" :id="id"></tournament-details>
  </div>
</template>
<script>
  import { TournamentDetails } from '~/components/common/tournaments'
  import { mapGetters } from 'vuex'
  import firebaseApp from '~/firebaseapp'
  function getId (rp) { return firebaseApp.database().ref(`/urls/${rp.date}/${rp.slug}`).once('value', (snapshot) => snapshot) }

  export default {
    data () { return { id: null } },
    mounted: function () {
      this.$nextTick(function () {
        getId(this.$route.params).then(value => { this.id = value.node_.value_ })
      })
    },
    computed: { ...mapGetters({tournaments: 'getTournaments'}) },
    components: { TournamentDetails }
  }
</script>
