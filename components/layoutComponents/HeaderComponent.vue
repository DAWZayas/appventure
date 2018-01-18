<template>
  <div>
    <v-toolbar absolute :clipped-left="!isMobile" scroll-off-screen flat app>
      <v-toolbar-side-icon v-if="isMobile" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer v-if="isMobile"></v-spacer>
      <div class="d-flex flex-row align-items-center" @click="goHome">
        <v-avatar :tile="true"><img :src="logo" :tile="false" /></v-avatar>
        <v-toolbar-title v-if="!isMobile">AppVenture</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon @click="openSearch = !openSearch">
        <v-icon>search</v-icon>
      </v-btn>
      <v-avatar
          v-show="isAuthenticated"
          v-if="!isMobile"
          :size="'35px'"
          class="grey lighten-4"
        >
          <img :src="userPhoto" alt="avatar">
        </v-avatar>
    </v-toolbar>
    <search-bar :open="openSearch"></search-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      absolute
      :clipped="!isMobile"
      app
    >
      <v-list v-if="isMobile" class="pa-0">
        <v-list-tile avatar @click="goHome">
          <v-avatar><img :src="logo"/></v-avatar>
          <v-list-tile-title>AppVenture</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider v-if="isMobile" class="mt-0"></v-divider>
        <user-info :isAuthenticated="isAuthenticated" :isMobile="isMobile"></user-info>
        <items-list-component :isAuthenticated="isAuthenticated"></items-list-component>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import { itemsListComponent, userInfo, searchBar } from './header'

  export default {
    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 1264
        this.mini = window.innerWidth < 350
      },
      goHome () {
        this.$router.push('/')
      },
      ...mapActions(['logout', 'bindAuth', 'bindFirebaseReferences'])
    },
    beforeMount () {
      this.isAuthenticated ? this.bindAuth() : this.bindFirebaseReferences()
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
    computed: {
      ...mapGetters({ isAuthenticated: 'isAuthenticated', userPhoto: 'getUserPhoto' })
    },
    components: {
      itemsListComponent,
      userInfo,
      searchBar
    },
    data () {
      return {
        isMobile: null,
        mini: null,
        drawer: null,
        openSearch: false,
        logo: require('~/assets/logo.svg')
      }
    }
  }
</script>
<style lang="scss" scoped>
  hr {
    margin: 0;
  }
  .avatar-menu {
    padding: 1em 1.2em;
    margin: 0;
  }
</style>
