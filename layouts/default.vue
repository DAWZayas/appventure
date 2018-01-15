<template>
  <v-app :dark="isDark">
    <header-component @controlSearchBar="controlSearchBar"></header-component>

    <v-content>
      <v-text-field v-if="!isClosed" placeholder="Search..." hide-details autofocus class="pt-0"></v-text-field>
      <v-container fluid class="pa-0">
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer/>
  </v-app>
</template>
<script>
  import { HeaderComponent } from '~/components/layoutComponents'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        isClosed: true,
        lightTheme: { primary: '#29B6F6', secondary: '#66BB6A', accent: '#F44336', error: '#F44336', warning: '#ffeb3b', info: '#2196F3', success: '#4CAF50' },
        darkTheme: { primary: '#D32F2F', secondary: '#FF5252', accent: '#546E7A', error: '#D50000', warning: '#FFA000', info: '#42A5F5', success: '#81C784' }
      }
    },
    components: {
      HeaderComponent
    },
    computed: {
      ...mapGetters({
        isDark: 'getDarkTheme',
        isAuthenticated: 'isAuthenticated'
      })
    },
    methods: {
      ...mapActions(['bindAuth', 'bindFirebaseReferences']),
      controlSearchBar () {
        this.isClosed = !this.isClosed
      },
      changeTheme (theme) {
        this.$vuetify.theme = theme
      }
    },
    beforeMount () {
      this.isAuthenticated ? this.bindAuth() : this.bindFirebaseReferences()
    },
    watch: {
      isDark: function () {
        this.isDark ? this.changeTheme(this.darkTheme) : this.changeTheme(this.lightTheme)
      }
    }
  }
</script>
