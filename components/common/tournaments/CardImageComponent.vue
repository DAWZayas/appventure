<template>
  <div class="p-0 container-p">  
    <transition name="fade"><div v-if="!loading" class="d-flex flex-column align-items-center">
      <img :src="logo" class="load-img" alt="AppVenture">
    </div></transition>
    <transition name="fade"><img v-show="loading" class="tournament" src="http://gifimage.net/wp-content/uploads/2017/08/spinner-gif-13.gif" v-img="src"></transition>
  </div>
</template>
<script>
export default {
  props: ['src'],
  data () {
    return {
      loading: false,
      logo: require('~/assets/logo-animated.svg')
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      setTimeout(() => { this.loading = true }, 1000)
    })
  }
}
</script>
<style lang="scss" scoped>
  @keyframes loader {
    0%, 100% { max-width: 2rem; }
    25%, 75% { max-width: 5rem }

    0% { transform: rotate(0); }
    25% { transform: rotate(45deg); }
    75% { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .tournament {
    width: 100%;
  }

  .container-p {
    height: 10rem!important;
    overflow: hidden;
  }

  .load-img {
    position: absolute;
    top: 25%;
    animation-timing-function: cubic-bezier(.90,.15,.15,.90);
    animation-name: loader;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }
</style>
