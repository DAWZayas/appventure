<template>
  <section class="flex slide-top">
    <h3>Torneos cerca de ti</h3>
    <section class="flex slide">
      <p></p>
      <article-tournament-component></article-tournament-component>
    </section>
  </section>
</template>
<script>
  import ArticleTournamentComponent from '~/components/common'

  export default {
    data () {
      return {}
    },
    components: {
      ArticleTournamentComponent
    }
  }
</script>
<style>
  .flex {
      display: flex;
  }
  .slide-top {
    background-color: white;
    padding: 0 1em;
    margin: 1em -2em 0;
    flex-direction: column; 
  }
  .slide {
      margin: -1em -1.5em 0 -1.5em;
      overflow-x: scroll;
  }
  .slide > article {
      padding-right: 1.5em;
      padding-left: 1.5em;
      padding: 1em;
      border-radius: 0.20em;
      flex-direction: column;
      cursor: pointer;
      display: flex;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  }
  .slide > article > * {
      cursor: pointer;
  }
  .img-slide {
      width: 10em;
  }
</style>
