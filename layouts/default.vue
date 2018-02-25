<template>
  <v-app :dark="isDark">
    <header-component></header-component>

    <transition name="fade"><v-content class="pb-5 mb-2">
      <v-container fluid class="p-0">
        <nuxt/>
        <footer-component></footer-component>
      </v-container>
    </v-content></transition>

  </v-app>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/layoutComponents'
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    components: { HeaderComponent, FooterComponent },
    computed: { ...mapGetters({ isDark: 'getDarkTheme', isAuthenticated: 'isAuthenticated' }) },
    created () {
      if (process.browser) {
        window.onNuxtReady((app) => {
          this.isAuthenticated ? this.bindAuth() : this.bindFirebaseReferences()
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
      }
    },
    watch: {
      isDark: function () { this.isDark ? this.changeTheme(this.darkTheme) : this.changeTheme(this.lightTheme) }
    },
    data () {
      return {
        isClosed: true,
        lightTheme: { primary: '#29B6F6', secondary: '#66BB6A', accent: '#F44336', error: '#F44336', warning: '#ffeb3b', info: '#2196F3', success: '#4CAF50' },
        darkTheme: { primary: '#D32F2F', secondary: '#FF5252', accent: '#546E7A', error: '#D50000', warning: '#FFA000', info: '#42A5F5', success: '#81C784' }
      }
    }
  }
</script>
