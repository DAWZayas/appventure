<template>
  <div>
    <span>{{$route.params.id}}</span>
    <tournament-details></tournament-details>
  </div>
</template>
<script>
  import { TournamentDetails } from '~/components/common'

  export default {
    components: {
      TournamentDetails
    }
  }
</script>
