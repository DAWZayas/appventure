<template>
  <div>
    <v-navigation-drawer class="white" temporary v-model="drawer" absolute>
      <v-list class="pa-1">
        <nuxt-link class="black-text" to="/appventure/">
        <v-list-tile avatar tag="div">
          <v-avatar :tile="true"><img :src="logo" :tile="false" /></v-avatar>
          <v-list-tile-title>AppVenture</v-list-tile-title>
        </v-list-tile>
        </nuxt-link>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile ripple v-for="(link, index) in navLinkIn[isAuthenticated]" :key="index" :to="link.link" @click="link.eFunction">
          <v-list-tile-action>
            <v-icon color="blue-grey darken-2" :class="link.class"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="black-text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon" @click.stop="drawer = !drawer"></span>
        </button>
        <nuxt-link to="/appventure/"><img :src="logo" class="logo"></nuxt-link>
        <div class="collapse navbar-collapse">
          <div class="ml-lg-auto">
            <nuxt-link class="top-link nav-item" v-for="(link, index) in navLinkIn[isAuthenticated]" :key="index" :class="link.class" :to="link.link" @click="link.eFunction">{{ link.text }}</nuxt-link>
          </div>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSearch">
          <span class="navbar-toggler fa fa-search"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSearch">
          <section-search-component></section-search-component>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
  import { SectionSearchComponent } from '~/components/common'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        drawer: null,
        logo: require('~/assets/logo.svg'),
        navLinkIn: {
          true: [
            {
              text: ' Tu cuenta',
              class: 'icon-home3',
              link: '/appventure/users'
            },
            {
              text: ' Mis torneos',
              class: 'icon-trophy',
              link: '/appventure/'
            },
            {
              text: ' Clasificación',
              class: 'icon-stats-dots',
              link: '/appventure/users'
            },
            {
              text: ' Ayuda',
              class: 'icon-bubbles3',
              link: '/appventure/users'
            },
            {
              text: ' Cerrar sesión',
              class: 'icon-exit',
              link: '/login/',
              eFunction: 'logout'
            }
          ],
          false: [
            {
              text: ' Iniciar sesión',
              class: 'icon-home3',
              link: '/login/'
            },
            {
              text: ' Torneos',
              class: 'icon-trophy',
              link: '/login/'
            },
            {
              text: ' Clasificación',
              class: 'icon-stats-dots',
              link: '/login/'
            },
            {
              text: ' Ayuda',
              class: 'icon-bubbles3',
              link: '/login/'
            }
          ]
        }
      }
    },
    mounted () {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth)
        this.getWindowWidth()
      })
    },
    computed: {
      ...mapGetters({ isAuthenticated: 'getIsAuthenticated' })
    },
    methods: {
      getWindowWidth (event) {
        this.windowWidth = document.documentElement.clientWidth
        if (this.windowWidth > 992) {
          this.logo = require('~/assets/logo-lg.svg')
        } else {
          this.logo = require('~/assets/logo.svg')
        }
      },
      logout () {
        this.setLoginStatus()
      },
      ...mapActions(['setLoginStatus'])
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.getWindowWidth)
    },
    components: {
      SectionSearchComponent
    }
  }
</script>
<style scoped>
  @import 'assets/icons/style.css';

  header {
    background-color: white;
  }
  
  .logo {
    max-width: 50px;
    transition: transform 1s;
    cursor: pointer;
  }

  .top-link {
    padding: 1em 1em;
    margin: 0.25em 0;
    color: rgb(0, 0, 0);
    cursor: pointer;
  }

  .navbar {
    padding: 0 !important;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  #navbarSearch {
    border-bottom: 1px solid rgba(117, 117, 117, .5);
  }

  @media (min-width: 992px) {

    #navbarSearch { 
      display: none !important
    }

    header {
      background-color: #00bcd4;
    }

    .navbar {
      padding: 0 1em !important;
    }

    .logo:hover {
      transform: scale(1.1);
    }

    .navbar-nav {
      border: 0;
    }

    .top-link {
      transition: border-bottom .5s;
      border-bottom: 3px solid transparent;

      &:hover { border-bottom: 3px solid #212121; }
    }
  }
</style>
