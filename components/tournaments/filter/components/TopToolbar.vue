<template>
  <v-toolbar color="white" flat>
    <h5 class="d-flex align-items-center p-0 pl-2">
      <v-icon @click="drawer">keyboard_arrow_right</v-icon>
      Organizar resultados:
    </h5>
  </v-toolbar>
</template>
<script>
export default {
  props: ['filterD'],
  methods: { drawer () { this.$emit('update:filterD', !this.filterD) } }
}
</script>
