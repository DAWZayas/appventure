<template>
  <main>
    <section-search-component></section-search-component>
    <section-principal-component></section-principal-component>
    <section-categories-component></section-categories-component>
    <section-related-component></section-related-component>
  </main>
</template>
<script>
  import { SectionSearchComponent, SectionPrincipalComponent, SectionCategoriesComponent, SectionRelatedComponent } from '~/components/common'

  export default {
    components: {
      SectionSearchComponent,
      SectionPrincipalComponent,
      SectionCategoriesComponent,
      SectionRelatedComponent
    }
  }
</script>
