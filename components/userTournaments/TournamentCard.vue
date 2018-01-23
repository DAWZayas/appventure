<template>
  <v-layout row wrap m-2>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          height="150px"
          :src="tournament.imagesURL[0]"
        >
        </v-card-media>
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
    props: ['tournament']
  }
</script>

