<template>
  <div class="d-flex loader flex-column align-items-center">
    <img :src="logo" class="loadr" alt="AppVenture">
  </div>
</template>
<script>
export default {
  layout: 'login',
  data () {
    return {
      logo: require('~/assets/logo.svg'),
      isSignUp: true
    }
  }
}
</script>
<style lang="scss" scoped>
  @keyframes loader {
    0% {
      max-width: 10em;
      transform: rotate(0);
    }

    50% {
      max-width: 20em;
      transform: rotate(45deg);
    }

    100% {
      max-width: 10em;
      transform: rotate(0);
    }
  }

  .loader {
    background-color: rgba(19, 35, 47, 0.9);
    height: 100vh;

    & > .loadr {
      animation-timing-function: cubic-bezier(.90,.15,.15,.90);
      animation-name: loader;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;

    }
  }
</style>
