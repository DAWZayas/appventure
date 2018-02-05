<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 m-1>
        <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName, id: id } }">
          <v-card>
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
      </v-flex>
    </v-layout>
</template>
<script>
  import speakingurl from 'speakingurl'
  import { CardImageComponent } from '~/components/common/tournaments'

  export default {
    props: ['tournament', 'id'],
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
