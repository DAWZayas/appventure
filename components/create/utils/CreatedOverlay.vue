<template>
  <div class="main-loader">
    <div class="loader-container">
      <div class="d-flex flex-column align-items-center">
        <img :src="logo" class="load-img" alt="AppVenture">
      </div>
      <div class="load-t">
        <span>{{ loadingT }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logo: require('~/assets/logo-animated.svg'),
      loadingT: 'Creando'
    }
  }
}
</script>
<style lang="scss" scoped>
  @keyframes loader {
    0%, 100% { max-width: 5rem; }
    25%, 75% { max-width: 10rem }

    0% { transform: rotate(0); }
    25% { transform: rotate(45deg); }
    75% { transform: rotate(270deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes dots {
    0%, 100% { width: 0; }
    20% { width: 0; }
    50% { width: 2.5rem; }
  }

  .main-loader {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
  }

  .loader-container {
    position: relative;
    overflow: hidden;
    background-color: rgba(255, 255, 255, .75);
    height: 100%;
  }

  .load-img {
    position: absolute;
    top: 30%;
    animation-timing-function: cubic-bezier(.90,.15,.15,.90);
    animation-name: loader;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  .load-t {
    position: absolute;
    font-size: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(200, 200, 200);
    width: 100%;
    top: 60%;
    text-align: center;

    & span:after {
      position: absolute;
      overflow: hidden;
      animation: dots 2s infinite;
      content: "\2026";
    }
  }
</style>
