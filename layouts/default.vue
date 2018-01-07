<template>
  <v-app :dark="darkTheme">
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
        isClosed: true
      }
    },
    components: {
      HeaderComponent
    },
    computed: {
      ...mapGetters({
        darkTheme: 'getDarkTheme',
        isAuthenticated: 'isAuthenticated'
      })
    },
    methods: {
      ...mapActions(['bindAuth', 'bindFirebaseReferences']),
      controlSearchBar () {
        this.isClosed = !this.isClosed
      }
    },
    beforeMount () {
      this.isAuthenticated ? this.bindAuth() : this.bindFirebaseReferences()
    }
  }
</script>
