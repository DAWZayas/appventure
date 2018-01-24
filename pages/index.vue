<template>
  <div>
    <loading-component v-show="!loaded"></loading-component>
    <router-view></router-view>
  </div>
</template>
<script>
import { LoadingComponent } from '~/components/layoutComponents'

export default {
  components: { LoadingComponent },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => { this.loaded = true }, 2000)
    })
  },
  data () {
    return {
      // Handle loading with arrray of 'trues'
      loaded: false
    }
  }
}
</script>
