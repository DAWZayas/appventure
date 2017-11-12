<template>
  <main class="container-box">
    <div class="view head-image">
      <img :src="headImg" class="img-fluid">
      <div class="mask flex-center"></div>
      <p class="superpossed text-uppercase font-weight-bold">¡Apúntate, participa y gana!</p>
    </div>
    <section-search-component class="show-s-bar"></section-search-component>
    <section-principal-component></section-principal-component>
    <section-categories-component></section-categories-component>
    <section-related-component></section-related-component>
  </main>
</template>
<script>
  import { SectionSearchComponent, SectionPrincipalComponent, SectionCategoriesComponent, SectionRelatedComponent } from '~/components/common'

  export default {
    data () {
      return {
        headImg: require('~/assets/images/sports/sports-head.jpg')
      }
    },
    components: {
      SectionSearchComponent,
      SectionPrincipalComponent,
      SectionCategoriesComponent,
      SectionRelatedComponent
    }
  }
</script>
<style soped>
  .show-s-bar, .head-image {
    display: none;
  }

  .container-box {
    max-width: 100%;
    padding: 0;
  }

  @media (min-width: 992px) {

    .show-s-bar, .head-image {
      display: block
    }

    .mask {
      background-color: white;
      opacity: 0;
      transition: opacity .4s;
      &:hover {
        opacity: .3;
      }
    }

    .superpossed {
      position: absolute;
      left: .5em;
      bottom: 0;
      font-family: Roboto;
      font-size: 3rem;
      color: rgb(0,0,0);
    }
    
    .container-box {
      max-width: 1140px;
      padding: 0 1em;
      margin: auto;
    }
  }
</style>
