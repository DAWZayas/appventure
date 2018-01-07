<template>
  <v-app>
    <nuxt/>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['bindAuth'])
  },
  beforeMount () {
    this.bindAuth()
  }
}
</script>
