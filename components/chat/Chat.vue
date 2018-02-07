<template>
  <div d-flex> 
    <v-list two-linev class="mx-2 pb-0">
      <template>
        <div class="d-flex my-3 px-2 align-items-center">
          <v-list-tile-avatar>
            <img src="http://dhpsolucionesonline.com/mediapool/143/1431874/resources/big_31817754_0_350-350.jpg" alt="avatar">
          </v-list-tile-avatar>
          <v-list-tile-content style="width: 100%">
            <v-list-tile-title> Hola, ¿ en que podemos ayudarle ? </v-list-tile-title>
          </v-list-tile-content>
        </div>
        <v-divider class="m-0"></v-divider>
      </template>
    </v-list>
    <v-list two-linev class="mx-2 pb-0 pt- px-2">
      <template  v-for="(message, index) in messages"  :message="message">
        <div :key="index" class="d-flex my-3 align-items-center">
          <v-list-tile-content style="width: 100%">
            <v-list-tile-title v-html="message"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <img :src="userPhoto" alt="avatar">
          </v-list-tile-avatar>
        </div>
        <v-divider class="m-0" style="width: calc( 100% - 60px )"></v-divider>
      </template>
    </v-list>
    <div class="kk m-2 d-flex">
      <v-text-field
        name="input-1"
        label="Mensaje"
        v-model="newMessage"
        @keyup.enter="pushMessage"
      ></v-text-field>
      <v-btn @click="pushMessage">Enviar</v-btn>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        newMessage: '',
        firstTime: false
      }
    },
    computed: {
      ...mapGetters({messages: 'getUserMessages', userPhoto: 'getUserPhoto'})
    },
    methods: {
      ...mapActions(['addMessage']),
      pushMessage () {
        this.newMessage === '' ? null : this.addMessage(this.newMessage)
        this.newMessage = ''
      }
    }
  }
</script>
<style>
  .kk {
    position: fixed ;
    bottom: 2em;
  }
</style>

