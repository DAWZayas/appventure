<template>
  <div>
    <chat :id="id"></chat>
  </div>
</template>
<script>
  import { Chat } from '~/components/chat'

  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    components: {
      Chat
    }
  }
</script>
