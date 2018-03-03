<template>
  <div class="error-container">
    <div class="d-flex flex-column align-items-center">
      <img :src="logo" class="logo" alt="AppVenture">
      <div v-if="error.statusCode === 404" class="white--text px-1">
        <h2 style="text-align: center;">Espera, ha habido un error</h2>
        <p style="text-align: center;">No hemos podido encontrar lo que buscabas. Asegúrate de haberlo escrito correctamente.</p>
      </div>
      <h2 v-else class="white--text">{{ error.message }}</h2>
    </div>
    <v-btn nuxt block depressed dark class="square home-button" to="/">Volver a inicio</v-btn>
  </div>
</template>
<script>
  export default {
    props: ['error'],
    data: () => { return { logo: '/social/logo.png' } }
  }
</script>
<style lang="scss" scoped>
  .error-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(19, 35, 47, .9);

    div {
      position: absolute;
      top: calc( ( 1rem / 2 ) * 14 );
      width: 100%;
      
      div {
        margin-top: 10rem;
      }
    }
  }

  .logo {
    max-width: 20em;
  }

  .home-button {
    position: absolute;
    bottom: calc( ( 1rem / 2 ) * 5 );
  }

  p {
    text-align: center;
  }

  $isMobile: 1264px;
  $isMini: 600px;

  @media (min-width: $isMobile) {
    .error-container {
      left: 300px;
    }
  }
</style>
