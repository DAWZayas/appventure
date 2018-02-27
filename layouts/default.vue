<template>
  <v-app :dark="isDark">
    <header-component :mini="mini" :isMobile="isMobile" :dark="isDark"></header-component>

      <v-content>
    <transition name="fade">
        <v-container fluid class="p-0">
          <nuxt/>
        </v-container>
    </transition>
      </v-content>

    <footer-component :isMobile="isMobile" :dark="isDark"></footer-component>
  </v-app>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/layoutComponents'
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    components: { HeaderComponent, FooterComponent },
    computed: { ...mapGetters({ isDark: 'getDarkTheme', isAuthenticated: 'isAuthenticated' }) },
    beforeMount () { this.bindFirebaseReferences() },
    created () {
      if (process.browser) {
        window.onNuxtReady((app) => {
          this.bindAuth()
          if ('geolocation' in navigator) { this.geolocate() }
        })
      }
    },
    methods: {
      ...mapActions(['bindAuth', 'bindFirebaseReferences']),
      ...mapMutations(['setUserLocation']),
      changeTheme (theme) { this.$vuetify.theme = theme },
      geolocate () {
        navigator.geolocation.getCurrentPosition(position => {
          this.setUserLocation({ lat: parseFloat(position.coords.latitude), lng: parseFloat(position.coords.longitude) })
        })
      },
      onResize () {
        this.isMobile = window.innerWidth < 1264
        this.mini = window.innerWidth < 350
      },
      goHome () {
        this.$router.push('/')
      },
      ...mapActions(['logout'])
    },
    mounted () {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize)
        this.onResize()
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResize)
    },
    watch: {
      isDark: function () { this.isDark ? this.changeTheme(this.darkTheme) : this.changeTheme(this.lightTheme) }
    },
    data () {
      return {
        isMobile: true,
        mini: false,
        isClosed: true,
        lightTheme: { primary: '#29B6F6', secondary: '#66BB6A', accent: '#F44336', error: '#F44336', warning: '#ffeb3b', info: '#2196F3', success: '#4CAF50' },
        darkTheme: { primary: '#D32F2F', secondary: '#FF5252', accent: '#546E7A', error: '#D50000', warning: '#FFA000', info: '#42A5F5', success: '#81C784' }
      }
    }
  }
</script>
