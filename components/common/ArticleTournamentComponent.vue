<template>
<div>
  <article class="d-flex flex-column venture">
    <div class="view hm-zoom">
      <nuxt-link :to="'/tournaments/' + tournament['.key']"><img :src="images[this.src]" class="img-slide"></nuxt-link>
    </div>
    <strong class="venture-strong">{{ tournament.strong }}</strong>
    <p class="venture-location"><i class="fa fa-globe article-icon" aria-hidden="true"></i> {{ tournament.location }}</p>
    <p class="venture-dificult"><i class="fa fa-gears article-icon" aria-hidden="true"></i> {{ tournament.level }}</p>
    <button class="see-more">···</button>
  </article>
</div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['tournament'],
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
<style scoped>
  .venture {
    border-radius: 0.20em;
    border-bottom-right-radius: 0;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    position: relative;
    margin: 1em;
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
    transition: background-color .2s;
    border-top-left-radius: 20%;
    position: absolute;
    margin: 0;
    bottom: 0;
    right: 0;

    &:hover { background-color: rgba(139, 195, 74, .8); }
  }

  .img-slide {
    width: 10em;
    margin: 0;
  }
</style>
