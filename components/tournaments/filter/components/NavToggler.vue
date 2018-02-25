<template>
  <v-btn
    v-if="button"
    :small="small"
    fab
    @click="toggle"
    :color="color"
    slot="activator"
  >
    <v-icon>filter_list</v-icon>
  </v-btn>
  <v-icon v-else @click="toggle">filter_list</v-icon>
</template>
<script>
export default {
  props: {
    button: { default: false, type: Boolean },
    small: { default: false, type: Boolean },
    color: { default: 'primary', type: String },
    filterD: { default: false, type: Boolean }
  },
  methods: { toggle () { this.$emit('update:filterD', !this.filterD) } }
}
</script>
