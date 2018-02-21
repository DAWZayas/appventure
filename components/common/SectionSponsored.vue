<template>
  <section>
    <h5>Torneo patrocinado</h5>
    <main-article :tournament="this.tournament"></main-article>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { MainArticle } from '~/components/common'
  export default {
    computed: { ...mapGetters({tournament: 'getTournamentSponsored'}) },
    components: { MainArticle }
  }
</script>
