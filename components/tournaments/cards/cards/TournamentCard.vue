<template>
  <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName } }">
    <v-card class="m-1 square">
      <v-alert :color="outFinish ? 'error' : 'amber accent-2'" :icon="outFinish ? 'warning' : 'priority_high'" class="m-0 py-1 card-alert square black--text" :value="outIns">
        {{ outFinish ? '¡ Ya ha terminado !' : '¡ Ya ha comenzado !' }}
      </v-alert>
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
  import { isOutDateD } from '~/utils/utils'

  export default {
    props: ['tournament'],
    computed: {
      outIns () { return !isOutDateD(this.tournament.initDate) },
      outFinish () { return !isOutDateD(this.tournament.finishDate) }
    },
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
<style lang="scss" scoped>
  .card-alert {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
