<template>
  <div v-if="tournament">
    <article class="tournament">
      <div>
        <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName } }">
          <div class="tournament-img p-0">
            <v-carousel id="carousel" class="no-shadow" hide-delimiters hide-controls>
              <v-carousel-item v-for="(src,i) in tournament.imagesURL" :src="src" :key="i" class="m-0 p-0 carousel-image"></v-carousel-item>
            </v-carousel>
          </div>
        </nuxt-link>
        <div class="tournament-strong t-overflow">{{ tournament.name }}</div>
      </div>
    </article>
  </div>
</template>
<script>
  import speakingurl from 'speakingurl'

  export default {
    props: ['tournament'],
    data () {
      return {
        slugDate: speakingurl(this.tournament.createDate),
        slugName: speakingurl(this.tournament.name)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tournament {
    position: relative!important;
    cursor: pointer;
    padding: 0 1rem;
    margin: 1rem 0;
  }

  .tournament-strong {
    background-color: #00BCD4;
    color: #FFFFFF;
    padding: .2em;
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
  }

  .tournament-img {
    width: 100%!important;
    height: auto!important;
  }
</style>
