<template>
  <div>
    <v-card v-for="user in users" :key="user.key" >
      {{ user.type }}
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
