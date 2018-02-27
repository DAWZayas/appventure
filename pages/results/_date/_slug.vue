<template>
  <div>
    <result-tournament :tournament="tournaments[id]"></result-tournament>
  </div>
</template>
<script>
  import { ResultTournament } from '~/components/userTournaments'
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
    components: { ResultTournament }
  }
</script>
