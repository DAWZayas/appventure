<template>
  <v-container class="pa-0 ma-0">
    <section-principal-component></section-principal-component>
    <section-categories-component></section-categories-component>
    <section-related-component></section-related-component>
  </v-container>
</template>
<script>
  import { SectionPrincipalComponent, SectionCategoriesComponent, SectionRelatedComponent } from '~/components/common'

  export default {
    components: {
      SectionPrincipalComponent,
      SectionCategoriesComponent,
      SectionRelatedComponent
    }
  }
</script>
