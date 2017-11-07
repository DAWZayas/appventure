<template>
<div>
  <article class="d-flex flex-direction-column venture">
    <div class="view hm-zoom">
      <img :src="tournament.src" class="img-slide">
    </div>
    <strong class="venture-strong">{{ tournament.strong }}</strong>
    <p class="venture-location"><i class="fa fa-globe article-icon" aria-hidden="true"></i> {{ tournament.location }}</p>
    <p class="venture-dificult"><i class="fa fa-gears article-icon" aria-hidden="true"></i> {{ tournament.level }}</p>
    <button class="see-more">···</button>
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
  .venture {
    padding: 0;
    border-radius: 0.20em;
    border-bottom-right-radius: 0;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    position: relative;
  }
  .venture-strong {
    background-color: #00BCD4;
    color: #FFFFFF;
    border-bottom: 1px solid #BDBDBD;
    padding: .2em;
  }
  .venture-location, .venture-dificult {
    color: #212121;
    padding: .1em .5em;
    margin: 0;
  }
  .article-icon {
    color: #757575;
  }
  .see-more {
    border: none;
    cursor: pointer;
    background-color: #8BC34A;
    transition: all .2s;
    border-top-left-radius: 20%;
    position: absolute;
    margin: 0;
    bottom: 0;
    right: 0;
  }
  .see-more:hover {
    background-color: rgba(139, 195, 74, .8);
  }
  .img-slide {
    width: 10em;
    margin: 0;
  }
</style>

