<template>
  <v-chip color="secondary" small selected>
    {{ numberOfMessage }}
  </v-chip>
</template>
<script>
export default {
  props: ['user'],
  computed: {
    numberOfMessage () {
      var count = 0
      for (var i in this.user.messages) {
        count++
        console.log(i)
      }
      return count
    }
  }
}
</script>
