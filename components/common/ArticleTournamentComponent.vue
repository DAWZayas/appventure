<template>
<div>
  <article class="tournament">
    <div class="view hm-zoom">
      <nuxt-link :to="'/tournaments/' + id"><img :src="images[this.src]" class="img-slide"></nuxt-link>
    </div>
    <strong class="tournament-strong">{{ tournament.strong }}</strong>
    <p class="tournament-text"><v-icon>fa-globe</v-icon> {{ tournament.location }}</p>
    <p class="tournament-text"><v-icon>fa-gears</v-icon> {{ tournament.level }}</p>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" width="600px">
        <button class="see-more" color="primary" dark slot="activator">...</button>
        <v-card>
        <v-card-title>
          <span class="headline">{{ tournament.strong }}</span>
        </v-card-title>
        <v-card-text>
          <p class="tournament-text"><v-icon>fa-globe</v-icon> {{ tournament.location }}</p>
          <p class="tournament-text"><v-icon>fa-gears</v-icon> {{ tournament.level }}</p>
          <p class="tournament-text"><v-icon>fa-calendar</v-icon></p>
        </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </article>
</div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['tournament', 'id'],
    data () {
      return {
        src: this.tournament.src,
        dialog: false
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
    display: flex;
    justify-content: center;
    flex-direction: column;
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
