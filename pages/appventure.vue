<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'

  export default {
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style>
  :root {
    overflow-x: hidden;
  }
  *, ::after, ::before {
    box-sizing: inherit;
    cursor: default;
  }
  ::-webkit-scrollbar { 
    display: none;
  }
</style>
