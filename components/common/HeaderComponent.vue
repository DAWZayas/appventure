<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nuxt-link to="/appventure/"><img :src="logo" class="logo"></nuxt-link>
        <span @click="showSBar" class="search-button navbar-toggler fa fa-search"></span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ml-lg-auto mt-lg-0">
            <nuxt-link class="top-link nav-item" v-for="(link, index) in navLink" :key="index" :class="link.class" :to="link.link">{{ link.text }}</nuxt-link>
          </div>
        </div>
      </nav>
    </header>
</template>
<script>
  export default {
    data () {
      return {
        opened: false,
        logo: require('~/assets/logo.svg'),
        navLink: [
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
        ]
      }
    },
    methods: {
      showSBar () { this.$root.$emit('showSBar') }
    }
  }
</script>
<style scoped>
  @import 'assets/icons/style.css';
  .shoes {
    margin: 0 !important;
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
    border: 0;
    border-radius: 0;
    box-shadow: none;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (min-width: 992px) {  
    .search-button {
      display: none;
    }

    .logo:hover {
      transform: scale(1.1);
    }
    
    .top-link {
      transition: border-bottom .5s;
      border-bottom: 3px solid rgba(0, 188, 212, .5);
    }

    .top-link:hover {
      border-bottom: 3px solid #00BCD4;
    }
  }
</style>
