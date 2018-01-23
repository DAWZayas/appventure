<template>
  <v-app :dark="isDark">
    <header-component></header-component>

    <loading-component v-show="!loaded"></loading-component>
    <transition name="fade"><v-content v-show="loaded">
      <v-container fluid class="p-0">
        <nuxt/>
      </v-container>
    </v-content></transition>

    <v-footer/>
  </v-app>
</template>
<script>
  import { HeaderComponent, LoadingComponent } from '~/components/layoutComponents'
  import { mapGetters } from 'vuex'

  export default {
    components: { HeaderComponent, LoadingComponent },
    computed: {
      ...mapGetters({ isDark: 'getDarkTheme' })
    },
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => { this.loaded = true }, 4000)
      })
    },
    methods: {
      changeTheme (theme) { this.$vuetify.theme = theme }
    },
    watch: {
      isDark: function () { this.isDark ? this.changeTheme(this.darkTheme) : this.changeTheme(this.lightTheme) }
    },
    data () {
      return {
        // Handle loading with arrray of 'trues'
        loaded: false,
        isClosed: true,
        lightTheme: { primary: '#29B6F6', secondary: '#66BB6A', accent: '#F44336', error: '#F44336', warning: '#ffeb3b', info: '#2196F3', success: '#4CAF50' },
        darkTheme: { primary: '#D32F2F', secondary: '#FF5252', accent: '#546E7A', error: '#D50000', warning: '#FFA000', info: '#42A5F5', success: '#81C784' }
      }
    }
  }
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
