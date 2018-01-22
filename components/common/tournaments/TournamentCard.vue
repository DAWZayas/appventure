<template>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            height="150px"
            :src="tournament.imagesURL[0]"
          >
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
</template>
<script>
  export default {
    props: ['tournament']
  }
</script>
