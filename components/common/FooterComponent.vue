<template>
  <footer class="footer-grid">
  <div class="copy">&copy Soy Programador S.L.</div>
    <div class="social">
      <a href="https://www.facebook.com/"><img class="social-img" src="images/social/facebook.png" alt="facebook"></a>
      <a href="https://www.twitter.com/"><img class="social-img" src="images/social/twitter.png" alt="twitter"></a>
      <a href="https://www.instagram.com/"><img class="social-img" src="images/social/instagram.png" alt="instagram"></a>
      <a href="https://plus.google.com/"><img class="social-img" src="images/social/google-plus.png" alt="google-plus"></a>
    </div>
  </footer>
</template>
<script>
</script>
<style lang="css">
    footer {
    background-color: #ccc;
    padding: .25em;
    margin: 0 -1em -1em;
    text-align: center;
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
