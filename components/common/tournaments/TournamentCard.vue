<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 m-1>
        <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName, id: id } }">
          <v-card>
            <div class="p-0 container-p">
              <img class="tournament" src="http://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" v-img="src">
            </div>
            <v-card-title>
              <div>
                <span>{{ tournament.name }}</span><br>
                <span class="grey--text">{{ tournament.location }}</span><br>
                <span class="grey--text">{{ tournament.level }}</span>
              </div>
            </v-card-title>
          </v-card>
        </nuxt-link>
      </v-flex>
    </v-layout>
</template>
<script>
  import speakingurl from 'speakingurl'

  export default {
    props: ['tournament', 'id'],
    data () {
      return {
        src: this.tournament.imagesURL[this.tournament.defaultImg],
        slugDate: speakingurl(this.tournament.createDate),
        slugName: speakingurl(this.tournament.name)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tournament {
    width: 100%;
  }

  .container-p {
    height: 10em!important;
    overflow: hidden;
  }
</style>
