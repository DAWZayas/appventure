<template>
  <div @click="hola">
    <v-card v-for="user in users" :key="user.key" >
      {{ user.type }}
      {{ user.key }}
    </v-card>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({users: 'getArrayUsers'})
    }
  }
</script>
