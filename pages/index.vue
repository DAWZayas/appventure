<template>
  <div>
    <transition name="fade"><loading-component v-show="!loaded"></loading-component></transition>
    <router-view></router-view>
  </div>
</template>
<script>
import { LoadingComponent } from '~/components/layoutComponents'

export default {
  components: { LoadingComponent },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => { this.loaded = true }, Math.floor((Math.random() * 3000) + 2000))
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
