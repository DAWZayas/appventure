<template>
<div id="search-bar">
  <v-text-field color="primary" placeholder=" Search..." hide-details autofocus :append-icon="'search'" :append-icon-cb="toggle"></v-text-field>
</div>
</template>
<script>
export default {
  methods: { toggle () { this.$emit('toggleSearch') } }
}
</script>
