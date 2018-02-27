<template>
  <div>
    <tournament-details :tournament="tournaments[id]" :id="id"></tournament-details>
  </div>
</template>
<script>
  import { TournamentDetails } from '~/components/common'
  import { mapGetters } from 'vuex'
  import firebaseApp from '~/firebaseapp'
  const getId = rp => firebaseApp.database().ref(`/urls/${rp.date}/${rp.slug}`)

  export default {
    data () { return { id: null } },
    mounted: function () {
      this.$nextTick(function () {
        getId(this.$route.params).on('value', snapshot => { this.id = snapshot.val() })
      })
    },
    computed: { ...mapGetters({ tournaments: 'getTournaments' }) },
    components: { TournamentDetails }
  }
</script>
