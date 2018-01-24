<template>
  <v-layout row wrap m-2>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <div class="p-0 container-p">
          <img class="tournament" src="http://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" v-img="src">
        </div>
        <v-card-title>
          <div>
            <p>{{tournament.name}}</p>
            <span class="grey--text">Deporte: {{tournament.category}}</span><br>
            <span class="grey--text">Fecha: {{tournament.initDate}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Ver resultado</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  
</template>
<script>
  export default {
    props: ['tournament'],
    data () {
      return {
        src: this.tournament.imagesURL[this.tournament.defaultImg]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tournament {
    width: 100%;
  }

  .card__title {
    padding-bottom: 0!important;
  }

  .container-p {
    height: 10em!important;
    overflow: hidden;
  }
</style>
