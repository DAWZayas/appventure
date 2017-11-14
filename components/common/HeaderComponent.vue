<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nuxt-link to="/appventure/"><img :src="logo" class="logo"></nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSearch" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler fa fa-search"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div v-if="isAuthenticated" class="navbar-nav ml-lg-auto mt-lg-0">
            <nuxt-link class="top-link nav-item" v-for="(link, index) in navLinkIn" :key="index" :class="link.class" :to="link.link">{{ link.text }}</nuxt-link>
          </div>
          <div v-else class="navbar-nav ml-lg-auto mt-lg-0">
            <nuxt-link class="top-link nav-item" v-for="(link, index) in navLinkGuest" :key="index" :class="link.class" :to="link.link">{{ link.text }}</nuxt-link>            
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSearch">
          <div class="navbar-nav ml-lg-auto mt-lg-0">
            <section-search-component></section-search-component>
          </div>
        </div>
      </nav>
    </header>
</template>
<script>
  import { SectionSearchComponent } from '~/components/common'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        logo: require('~/assets/logo.svg'),
        navLinkIn: [
          {
            text: ' Tu cuenta',
            class: 'icon-home3',
            link: '/appventure/users'
          },
          {
            text: ' Mis torneos',
            class: 'icon-trophy',
            link: ''
          },
          {
            text: ' Clasificación',
            class: 'icon-stats-dots',
            link: ''
          },
          {
            text: ' Ayuda',
            class: 'icon-bubbles3',
            link: ''
          },
          {
            text: ' Cerrar sesión',
            class: 'icon-exit',
            link: ''
          }
        ],
        navLinkGuest: [
          {
            text: ' Iniciar sesión',
            class: 'icon-home3',
            link: '/login/'
          },
          {
            text: ' Torneos',
            class: 'icon-trophy',
            link: ''
          },
          {
            text: ' Clasificación',
            class: 'icon-stats-dots',
            link: ''
          },
          {
            text: ' Ayuda',
            class: 'icon-bubbles3',
            link: ''
          }
        ]
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
      }
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

  .navbar-nav {
    border-bottom: 1px solid rgba(117, 117, 117, .5);
  }

  @media (min-width: 992px) {

    header {
      background-color: #00bcd4
    }

    #navbarSearch, .search-button {
      display: none !important;
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
