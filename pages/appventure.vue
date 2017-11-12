<template>
  <div id="this-page">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css">
    <header-component class="sticky-top"></header-component>
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
  *, ::after, ::before {
    box-sizing: inherit;
    cursor: default;
  }
  ::-webkit-scrollbar { 
    display: none;
  }
</style>
