<template>
  <div class="p-0 container-p">
    <img class="tournament" src="http://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" v-img="src">
  </div>
</template>
<script>
export default {
  props: ['src']
}
</script>
<style lang="scss" scoped>
  .tournament {
    width: 100%;
  }

  .container-p {
    height: 10rem!important;
    overflow: hidden;
  }
</style>
