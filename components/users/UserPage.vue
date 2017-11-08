<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css">
    <header-component></header-component>
    <div v-if="isCreator"><button type="button" class="btn btn-light-green">Crear torneo</button></div>
  </div>
</template>
<script>
  import { HeaderComponent } from '~/components/common'

  export default {
    data () {
      return {
        isCreator: true
      }
    },

    components: {
      HeaderComponent
    }
  }
</script>
<style>

</style>
