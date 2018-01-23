<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 m-1>
        <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName, id: id } }">
          <v-card>
            <v-card-media
              height="150px"
              :src="tournament.imagesURL[0]"
            >
            </v-card-media>
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
