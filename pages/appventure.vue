<template>
  <div>
    <header-component></header-component>
    <main>
      Main
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'

  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style lang="scss">
  main {
    padding: 5em;
  }
</style>
