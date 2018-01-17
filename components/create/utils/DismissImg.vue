<template>
<div>
  <i v-if="!uploading"
    class="icon material-icons dismiss"
  >
      cancel
  </i>
</div>
</template>
<script>
export default {
  props: ['uploading']
}
</script>
<style lang="scss" scoped>
  .dismiss {
    position:absolute;
    top: .25rem;
    right: .25rem;
    color: #d34836;
    cursor: pointer;
    z-index: 100;
  }
</style>
