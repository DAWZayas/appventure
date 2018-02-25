<template>
  <v-card class="square m-1">
    <card-image-component :src="src"></card-image-component>
    <v-card-title>
      <div>
        <p>{{tournament.name}}</p>
        <span class="grey--text">Deporte: {{tournament.subcategory}}</span><br>
        <span class="grey--text">Fecha: {{tournament.initDate}}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange">Ver resultado</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  import { CardImageComponent } from '~/components/common/tournaments'

  export default {
    props: ['tournament'],
    data () {
      return {
        src: this.tournament.imagesURL[this.tournament.defaultImg]
      }
    },
    components: { CardImageComponent }
  }
</script>
<style lang="scss" scoped>
  .card__title {
    padding-bottom: 0!important;
  }
</style>
