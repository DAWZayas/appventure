<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions(['bindFirebaseReferences'])
    },
    created () {
      this.bindFirebaseReferences()
    },
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
