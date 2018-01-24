<template>
  <v-footer absolute class="pa-4">
    <div class="row">
      <a href="https://www.facebook.com/AppVenture.Web/"><img class="social-img" :src="facebook" alt="Facebook"></a>
      <a href="https://www.instagram.com/AppVentureWeb/?hl=es"><img class="social-img" :src="instagram" alt="Instagram"></a>
      <a href="https://plus.google.com/u/1/108578891966255753149"><img class="social-img" :src="googlePlus" alt="Google-Plus"></a>
    </div>
    <v-spacer></v-spacer>
    <div class="p-1">&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script>
  export default {
    data () {
      return {
        facebook: require('../../assets/images/social/facebook.png'),
        twitter: require('../../assets/images/social/twitter.png'),
        instagram: require('../../assets/images/social/instagram.png'),
        googlePlus: require('../../assets/images/social/google-plus.png')
      }
    }
  }
</script>
<style lang="css" scoped>
  a {
    padding: 0.30em;
  }
  .social-img {
    width: 1.5em;
    filter: grayscale(100%);
    transition: filter .25s;
  }
  .social-img:hover {
    filter: grayscale(0);
  }
</style>
