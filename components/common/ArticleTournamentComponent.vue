<template>
<div>
  <article>
    <strong>{{ tournament.strong }}</strong>
    <img :src="tournament.src" class="img-slide">
    {{ tournament.location }}
    {{ tournament.level }}
  </article>
</div>
</template>
<script>
  export default {
    props: ['tournament'],
    data () {
      return {
      }
    }
  }
</script>
<style>
  article {
      padding-right: 1.5em;
      padding-left: 1.5em;
      padding: 1em;
      border-radius: 0.20em;
      flex-direction: column;
      cursor: pointer;
      display: flex;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  }
  * {
      cursor: pointer;
  }
  .img-slide {
      width: 10em;
  }
</style>

