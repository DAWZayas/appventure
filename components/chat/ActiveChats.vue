<template>
  <div class="m-2">
    <center><h4 class="m-2"> Usuarios esperando respuesta </h4></center>
    <v-card v-for="(user) in users" :key="user.key" class="square p-1" v-if="user.messages">
      <nuxt-link :to="'chat/' + user.key">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex  xs4>
              <v-card-media class="p-1">
                <v-avatar
                  size="40px"
                  class="grey lighten-4"
                >
                  <img :src="user.photoURL" alt="avatar">
                </v-avatar>
              </v-card-media>
            </v-flex>
            <v-flex  xs6>
              <v-card-text>
                {{ user.displayName }}
              </v-card-text>
            </v-flex>
            <v-flex  xs2>
              <number-of-messages :user="user"></number-of-messages>
            </v-flex>
          </v-layout>
        </v-container>
       </nuxt-link>
    </v-card>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { NumberOfMessages } from '~/components/chat'
  export default {
    computed: {
      ...mapGetters({users: 'getArrayUsers'})
    },
    components: {
      NumberOfMessages
    }
  }
</script>
<style scoped>
  
</style>
