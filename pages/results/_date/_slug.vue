<template>
  <div>
    <result-tournament :tournament="tournaments[id]" :id="id"></result-tournament>
  </div>
</template>
<script>
  import { ResultTournament } from '~/components/userTournaments'
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
    components: { ResultTournament }
  }
</script>
