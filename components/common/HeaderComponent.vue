<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nuxt-link class="btn btn-primary" to="/appventure/">AppVenture</nuxt-link>
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
    }
  }
</script>
<style scoped>
  @import 'assets/icons/style.css';

  header {
    background-color: #0097A7;
  }

  .top-link {
    padding: 1em 1em;
    margin: 0.25em 0;
    color: rgb(0, 0, 0);
    cursor: pointer;
  }

  .navbar {
    background-color: #0097A7;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (min-width: 992px) {   
    .navbar {
      background-color: transparent;
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
