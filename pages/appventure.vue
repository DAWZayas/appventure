<template>
  <div>
    <header-component></header-component>
    <main>
      <section-principal-component></section-principal-component>
      <section-categories-component></section-categories-component>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, SectionPrincipalComponent, SectionCategoriesComponent, FooterComponent } from '~/components/common'

  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      SectionPrincipalComponent,
      SectionCategoriesComponent,
      FooterComponent
    }
  }
</script>
<style lang="scss">
  main {
    padding: 5em;
  }
</style>
