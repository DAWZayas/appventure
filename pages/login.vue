<template>
  <div>
    <authentication></authentication>
  </div>
</template>
<script>
  import { Authentication } from '~/components/landing'

  export default {
    layout: 'login',
    components: {
      Authentication
    }
  }
</script>

