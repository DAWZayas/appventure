<template>
  <v-footer :fixed="!isMobile" :absolute="isMobile" class="px-4 foot" :height="40" app>
    <div class="row">
      <nuxt-link to="https://www.facebook.com/AppVenture.Web/"><img class="social-img" :class="dark ? 'social-dark' : ''" :src="facebook" alt="Facebook"></nuxt-link>
      <nuxt-link to="https://www.instagram.com/AppVentureWeb/?hl=es"><img class="social-img" :class="dark ? 'social-dark' : ''" :src="instagram" alt="Instagram"></nuxt-link>
      <nuxt-link to="https://plus.google.com/u/1/108578891966255753149"><img class="social-img" :class="dark ? 'social-dark' : ''" :src="googlePlus" alt="Google-Plus"></nuxt-link>
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
        facebook: require('../../assets/images/social/facebook.png'),
        twitter: require('../../assets/images/social/twitter.png'),
        instagram: require('../../assets/images/social/instagram.png'),
        googlePlus: require('../../assets/images/social/google-plus.png')
      }
    }
  }
</script>
<style lang="css" scoped>
  .foot {
    border-top: 1px solid rgba(0, 0, 0, .12)!important;
  }

  .social-dark {
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
