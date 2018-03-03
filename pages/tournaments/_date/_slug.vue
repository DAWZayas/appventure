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
    data () { return { id: false } },
    mounted: function () {
      this.$nextTick(function () {
        getId(this.$route.params).on('value', snapshot => { this.id = snapshot.val() })
      })
    },
    watch: {
      id () {
        if (this.id === null) {
          this.$nuxt.error({ statusCode: 404, message: 'No se ha encontrado el torneo' })
        }
      }
    },
    computed: { ...mapGetters({ tournaments: 'getTournaments' }) },
    components: { TournamentDetails }
  }
</script>
