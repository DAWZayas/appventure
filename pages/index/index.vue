<template>
  <v-container class="p-0 m-0">
    <main-article></main-article>
    <section-principal-component></section-principal-component>
    <section-categories-component></section-categories-component>
    <section-related-component></section-related-component>
    <filter-button-component></filter-button-component>
  </v-container>
</template>
<script>
  import { MainArticle, SectionPrincipalComponent, SectionCategoriesComponent, SectionRelatedComponent, FilterButtonComponent } from '~/components/common'

  export default {
    components: {
      MainArticle,
      SectionPrincipalComponent,
      SectionCategoriesComponent,
      SectionRelatedComponent,
      FilterButtonComponent
    }
  }
</script>
