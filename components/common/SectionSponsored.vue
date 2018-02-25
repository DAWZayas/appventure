<template>
  <section>
    <h5>Torneo patrocinado</h5>
    <main-article v-if="tournament" :tournament="tournament"></main-article>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { MainArticle } from '~/components/tournaments/cards/index'
  export default {
    computed: { ...mapGetters({ tournament: 'getTournamentSponsored' }) },
    components: { MainArticle }
  }
</script>
