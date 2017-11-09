<template>
  <div>
    <appventure v-if="isAuthenticated"></appventure>
    <login v-if="!isAuthenticated"></login>
  </div>
</template>
<script>
  import appventure from '~/pages/appventure'
  import login from '~/pages/login'

  export default {
    data () {
      return {
        isAuthenticated: true
      }
    },
    components: {
      appventure,
      login
    }
  }
</script>
<style>
  body, html {
    margin: 0;
    height: 100%;
  }

  /*.view {
    background: url("https://i.pinimg.com/originals/29/62/cc/2962ccc1e3818bbfdd6cb6aafd32dc8d.jpg")no-repeat center center;
    background-size: cover;
  }*/

  .container {
    box-shadow: none !important;
  }
</style>
