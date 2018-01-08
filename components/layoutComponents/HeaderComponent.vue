<template>
  <div>
    <v-toolbar :fixed="isMobile" :absolute="!isMobile" :clipped-left="!isMobile" scroll-off-screen flat app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer v-if="isMobile"></v-spacer>
      <div class="d-flex flex-row align-items-center" @click="goHome">
        <v-avatar :tile="true"><img :src="logo" :tile="false" /></v-avatar>
        <v-toolbar-title v-if="!isMobile">AppVenture</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon @click="controlSearchBar">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon v-if="!isMobile">
        <v-icon>person</v-icon>
      </v-btn>
    </v-toolbar>
    
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
        <v-list-tile v-for="item in items[isAuthenticated]" :key="item.title" @click="goTo(item)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    mounted: function () {
      this.onResize()
    },
    updated: function () {
      this.$nextTick(function () {
        this.onResize()
      })
    },
    computed: {
      ...mapGetters({ isAuthenticated: 'isAuthenticated' })
    },
    methods: {
      ...mapActions(['logout']),
      onResize () {
        this.isMobile = window.innerWidth < 1264
        this.mini = window.innerWidth < 350
      },
      goTo (item) {
        this.isMobile ? this.drawer = false : null
        if (item.title === 'Cerrar sesión') {
          this.logout()
        } else {
          this.$router.push(item.link)
        }
      },
      goHome () {
        this.$router.push('/')
      },
      controlSearchBar (event) {
        this.$emit('controlSearchBar', 'clicked')
      }
    },
    data () {
      return {
        isMobile: null,
        mini: null,
        logo: require('~/assets/logo.svg'),
        drawer: null,
        items: {
          true: [
            {
              title: 'Tu cuenta',
              icon: 'home',
              link: '/users'
            },
            {
              title: 'Mis torneos',
              icon: 'fa-trophy',
              link: '/'
            },
            {
              title: 'Clasificación',
              icon: 'trending_up',
              link: '/users'
            },
            {
              title: 'Ayuda',
              icon: 'chat_bubble_outline',
              link: '/'
            },
            {
              title: 'Cerrar sesión',
              icon: 'close',
              link: '/login'
            }
          ],
          null: [
            {
              title: 'Iniciar sesión',
              icon: 'home',
              link: '/login'
            },
            {
              title: 'Mis torneos',
              icon: 'fa-trophy',
              link: '/'
            },
            {
              title: 'Clasificación',
              icon: 'trending_up',
              link: '/users'
            },
            {
              title: 'Ayuda',
              icon: 'chat_bubble_outline',
              link: '/'
            }
          ]
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .icon {
    font-size: 2rem!important;
  }
</style>
