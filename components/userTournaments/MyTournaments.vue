<template>
  <v-layout row wrap m-3>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          height="150px"
          :src="this.src"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Campeonato nacional de padel 2018</span><br><br>
            <span>Deporte: Padel</span><br>
            <span>Fecha: </span>
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
    data () {
      return {
        src: require('../../assets/images/torneos/torneopadel.jpg')
      }
    }
  }
</script>

