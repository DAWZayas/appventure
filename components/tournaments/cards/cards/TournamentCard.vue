<template>
  <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName } }">
    <v-card class="m-1 square">
      <card-image-component :src="src"></card-image-component>
      <v-card-title>
        <div>
          <span>{{ tournament.name }}</span><br>
          <span class="grey--text">{{ tournament.location.name }} - {{ tournament.location.locality }} </span><br>
          <span class="grey--text">{{ tournament.level }}</span>
        </div>
      </v-card-title>
    </v-card>
  </nuxt-link>
</template>
<script>
  import speakingurl from 'speakingurl'
  import { CardImageComponent } from './'

  export default {
    props: ['tournament'],
    data () {
      return {
        src: this.tournament.imagesURL[this.tournament.defaultImg],
        slugDate: speakingurl(this.tournament.createDate),
        slugName: speakingurl(this.tournament.name)
      }
    },
    components: { CardImageComponent }
  }
</script>
