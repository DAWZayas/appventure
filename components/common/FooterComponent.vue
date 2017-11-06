<template>
 <footer class="fixed-bottom">
  <div class="copy">&copy Soy Programador S.L.</div>
    <div class="social">
      <a href="https://www.facebook.com/"><img class="social-img" :src="facebook" alt="facebook"></a>
      <a href="https://www.twitter.com/"><img class="social-img" :src="twitter" alt="twitter"></a>
      <a href="https://www.instagram.com/"><img class="social-img" :src="instagram" alt="instagram"></a>
      <a href="https://plus.google.com/"><img class="social-img" :src="googlePLus" alt="google-plus"></a>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        facebook: require('../../assets/images/social/facebook.png'),
        twitter: require('../../assets/images/social/twitter.png'),
        instagram: require('../../assets/images/social/instagram.png'),
        googlePLus: require('../../assets/images/social/google-plus.png')
      }
    }
  }
</script>
<style lang="css">
    footer {
      background-color: #598b83;
      padding: .25em;
      text-align: center;
    }
    
    footer a {
      padding: 0.30em;
    }

    .copy {
        font-size: 1em;
        color: black;
        opacity: .60;
        padding: .25em;
    }

    .social-img {
        width: 1em;
        filter: grayscale(100%);
        transition: filter .25s;
    }

    .social-img:hover {
        filter: grayscale(0);
    }
</style>
