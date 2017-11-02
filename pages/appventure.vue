<template>
  <div>
    <header-component></header-component>
    <main>
      <section-search-component></section-search-component>
      <section-principal-component></section-principal-component>
      <section-categories-component></section-categories-component>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, SectionSearchComponent, SectionPrincipalComponent, SectionCategoriesComponent, FooterComponent } from '~/components/common'

  export default {
    data () {
      return {}
    },
    components: {
      HeaderComponent,
      SectionSearchComponent,
      SectionPrincipalComponent,
      SectionCategoriesComponent,
      FooterComponent
    }
  }
</script>
<style lang="scss">
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
  main {
    padding: 0em 1em 1em 1em;
  }
  * + * {
    margin: 1em;
  }
</style>
