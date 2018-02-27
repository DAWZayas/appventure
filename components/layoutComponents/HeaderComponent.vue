<template>
  <div>
    <v-navigation-drawer
      v-model="latDrawer"
      :mini-variant.sync="mini"
      fixed
      :clipped="!isMobile"
      :dark="dark"
      :class="dark ? '' : 'light'"
      app
    >
      <v-list v-if="isMobile" class="pa-0">
        <v-list-tile avatar @click="goHome">
          <v-avatar><img :src="logo"/></v-avatar>
          <v-list-tile-title>AppVenture</v-list-tile-title>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider class="mt-0" v-if="isMobile"></v-divider>
        <user-info v-if="isAuthenticated" :isMobile="isMobile" :class="dark ? '' : 'light-profile'"></user-info>
        <v-divider class="mt-0" v-if="isMobile"></v-divider>        
        <items-list-component :isAuthenticated="isAuthenticated"></items-list-component>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed :clipped-left="!isMobile" scroll-off-screen flat app>
      <v-toolbar-side-icon v-if="isMobile" @click.stop="latDrawer = !latDrawer"></v-toolbar-side-icon>
      <v-spacer v-if="isMobile"></v-spacer>

      <div class="d-flex flex-row align-items-center" @click="goHome">
        <v-avatar :tile="true"><img :src="logo" :tile="false" /></v-avatar>
        <v-toolbar-title v-if="!isMobile">AppVenture</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <div v-if="isAuthenticated">
        <create-tournament-component v-if="userType !== 'Venture'"></create-tournament-component>
        <form-to-be-creator v-else></form-to-be-creator>
      </div>

      <nuxt-link v-else to="login"><v-icon>portrait</v-icon></nuxt-link>
    </v-toolbar>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import { itemsListComponent, userInfo } from './header'
  import { CreateTournamentComponent } from '~/components/create'
  import { FormToBeCreator } from '~/components/users/userForm'

  export default {
    props: ['isMobile', 'mini', 'dark'],
    methods: {
      goHome () { this.$router.push('/') },
      ...mapActions(['logout'])
    },
    computed: {
      ...mapGetters({ isAuthenticated: 'isAuthenticated', userPhoto: 'getUserPhoto', userType: 'getUserType' })
    },
    components: {
      itemsListComponent,
      userInfo,
      CreateTournamentComponent,
      FormToBeCreator
    },
    data () {
      return {
        latDrawer: null,
        sBar: false,
        dialog: false,
        logo: require('~/assets/logo.svg')
      }
    }
  }
</script>
<style lang="scss" scoped>
  hr {
    margin: 0;
  }

  .light {
    background-color: #f5f5f5!important;
  }
  
  .light-profile {
    background-color: white!important;      
  }

  .avatar-menu {
    padding: 1em 1.2em;
    margin: 0;
  }
</style>
