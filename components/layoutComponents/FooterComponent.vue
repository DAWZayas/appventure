<template>
  <v-footer :fixed="!isMobile" :absolute="isMobile" class="px-4 foot" :height="40" app>
    <div class="row" :class="dark ? 'social-dark' : ''">
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
    props: ['isMobile', 'dark'],
    data () {
      return {
        facebook: '/social/facebook.png',
        twitter: '/social/twitter.png',
        instagram: '/social/instagram.png',
        googlePlus: '/social/google-plus.png'
      }
    }
  }
</script>
<style lang="css" scoped>
  .foot {
    border-top: 1px solid rgba(0, 0, 0, .12)!important;
    padding-right: 0.5rem!important;
  }

  .social-dark a img {
    filter: grayscale(0%)!important;
  }

  .social-img {
    width: 1.5em;
    filter: grayscale(100%);
    transition: filter .25s;
    margin-right: .5rem;
  }

  .social-img:hover {
    filter: grayscale(0);
  }
</style>
