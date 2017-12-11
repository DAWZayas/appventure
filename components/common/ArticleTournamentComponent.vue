<template>
<div>
  <article class="d-flex flex-column tournament">
    <div class="view hm-zoom">
      <nuxt-link :to="'/tournaments/' + id"><img :src="images[this.src]" class="img-slide"></nuxt-link>
    </div>
    <strong class="tournament-strong">{{ tournament.strong }}</strong>
    <p class="tournament-text"><i class="fa fa-globe"></i> {{ tournament.location }}</p>
    <p class="tournament-text"><i class="fa fa-gears"></i> {{ tournament.level }}</p>
    <button class="see-more">···</button>
  </article>
</div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['tournament', 'id'],
    data () {
      return {
        src: this.tournament.src
      }
    },
    computed: {
      ...mapGetters({
        images: 'getImages'
      })
    }
  }
</script>
<style lang="scss" scoped>
  .tournament {
    border-radius: 0.20em;
    border-bottom-right-radius: 0;
    width: 10em;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    position: relative;
    margin: 1em;
  }

  .tournament-strong {
    background-color: #00BCD4;
    color: #FFFFFF;
    border-bottom: 1px solid #BDBDBD;
    padding: .2em;
  }

  .tournament-text {
    color: #757575;
    padding: .1em .5em;
    margin: 0;
  }

  .see-more {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    cursor: pointer;
    background-color: #8BC34A;
    border-top-left-radius: 20%;
    transition: background-color .2s;
    padding: 0 .5em;
    margin: 0;
    
    &:hover { background-color: rgba(139, 195, 74, .8); }
  }

  .img-slide {
    width: 10em;
    margin: 0;
  }
</style>
