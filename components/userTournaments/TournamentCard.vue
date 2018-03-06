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
      <v-btn nuxt :to="link('tournaments')" flat block outline class="ml-0" color="primary">Ver torneo</v-btn>
      <v-btn nuxt v-if="!outDate" :to="link('results')" flat block outline class="mr-0" color="secondary">Ver resultado</v-btn>
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
      link (name) { return { name: name, params: { date: this.slugDate, slug: this.slugName } } }
    },
    components: { CardImageComponent }
  }
</script>
<style lang="scss" scoped>
  .card__title {
    padding-bottom: 0!important;
  }
</style>
