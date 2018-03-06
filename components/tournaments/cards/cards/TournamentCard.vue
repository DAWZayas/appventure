<template>
  <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName } }">
    <v-card class="m-1 square">
      <card-image-component :src="src"></card-image-component>
      <v-card-title :class="outIns ? outFinish ? 'finished' : 'started' : 'in-date'">
        <div class="d-flex flex-column">
          <span>{{ tournament.name }}</span>
          <span class="grey--text">{{ tournament.location.name }} - {{ tournament.location.locality }} </span>
          <span class="grey--text">{{ tournament.level }}</span>
          <span
            :class="outIns ? outFinish ? 'finish--text' : 'started--text' : 'grey--text'"
          >
           {{ outIns ? outFinish ? '¡ Ya ha terminado !' : '¡ Ya ha comenzado !' : '¡ Inscripción abierta !' }}
          </span>
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

  .in-date, .started, .finished {
    border-left: 4px solid;
  }

  .in-date {
    border-left-color: #757575;    
  }

  .started {
    border-left-color: #ffd740;
  }

  .finished {
    border-left-color: #f44336;
  }

  .finish--text {
    color: #f44336;
  }

  .started--text {
    color: #ffd740;
  }
</style>
