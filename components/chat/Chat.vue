<template>
  <div class="d-flex m-2">
    <v-text-field
      name="input-1"
      label="Mensaje"
      v-model="message"
    ></v-text-field>
    <v-btn @click="pushMessage">Enviar</v-btn>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        message: ''
      }
    },
    methods: {
      ...mapActions(['addMessage']),
      pushMessage () {
        this.addMessage(this.message)
      }
    }
  }
</script>
