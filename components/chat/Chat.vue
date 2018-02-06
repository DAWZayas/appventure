<template>
  <div d-flex> 
    <div v-if="firstTime ? firstTime : messages ? firstTime : firstTime = true" class="d-flex">
      <v-avatar
        :size="'30px'"
        class="grey lighten-4"
        style="max-width: 30px"
      >
        <img src="http://dhpsolucionesonline.com/mediapool/143/1431874/resources/big_31817754_0_350-350.jpg" alt="avatar">
      </v-avatar>
      <p>Hola buenas en que pudeo ayudarte</p>
    </div>
    <div v-for="message in messages" :key="message" :message="message" class="d-flex m-2">
      <v-avatar
        :size="'30px'"
        class="grey lighten-4"
        style="max-width: 30px"
      >
        <img :src="userPhoto" alt="avatar">
      </v-avatar>
      <div> 
        <p>{{ message }}</p>  
      </div>
    </div>
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
        this.addMessage(this.newMessage)
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

