<template>
  <v-card class="square m-1">
    <card-image-component :src="src"></card-image-component>
    <v-card-title class="mb-2">
      <div>
        <p>{{tournament.name}}</p>
        <span class="grey--text">Categoria: {{tournament.subCategory}}</span><br>
        <span class="grey--text">Fecha: {{tournament.initDate}}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <nuxt-link :to="link()" style="width: 100%">
        <v-btn flat block outline class="m-0" :color="outDate ? 'primary' : 'secondary'">{{ outDate ? 'Ver torneo' : 'Ver resultado'}}</v-btn>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>
<script>
  import { CardImageComponent } from '~/components/tournaments/cards/cards'
  import { isOutDateD } from '~/utils/utils'
  import speakingurl from 'speakingurl'

  export default {
    props: ['tournament'],
    data () {
      return {
        src: this.tournament.imagesURL[this.tournament.defaultImg],
        slugDate: speakingurl(this.tournament.createDate),
        slugName: speakingurl(this.tournament.name)
      }
    },
    computed: { outDate () { return isOutDateD(this.tournament.finishDate) } },
    methods: {
      link () { return this.outDate ? { name: 'tournaments', params: { date: this.slugDate, slug: this.slugName } } : { name: 'results', params: { date: this.slugDate, slug: this.slugName } } }
    },
    components: { CardImageComponent }
  }
</script>
<style lang="scss" scoped>
  .card__title {
    padding-bottom: 0!important;
  }
</style>
