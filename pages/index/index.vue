<template>
  <v-container class="p-0 m-0">
    <section-sponsored></section-sponsored>
    <section-principal-component></section-principal-component>
    <section-categories-component></section-categories-component>
    <section-related-component></section-related-component>
    <filter-button-component></filter-button-component>
  </v-container>
</template>
<script>
  import { SectionSponsored, SectionPrincipalComponent, SectionCategoriesComponent, SectionRelatedComponent, FilterButtonComponent } from '~/components/common'

  export default {
    components: {
      SectionSponsored,
      SectionPrincipalComponent,
      SectionCategoriesComponent,
      SectionRelatedComponent,
      FilterButtonComponent
    }
  }
</script>
