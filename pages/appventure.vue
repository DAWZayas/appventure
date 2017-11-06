<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css">
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
  section+section {
    margin-top: 1em;
  }
  body {
    background-color: #AAA;
  }
</style>
