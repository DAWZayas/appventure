<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <button type="button" class="btn btn-primary">AppVenture</button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ml-lg-auto mt-lg-0">
            <a class="top-link nav-item" v-for="(link, index) in navLink" :key="index" :class="link.class">{{ link.text }}</a>
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
            class: 'icon-home3'
          },
          {
            text: ' Mis torneos',
            class: 'icon-trophy'
          },
          {
            text: ' Clasificación',
            class: 'icon-stats-dots'
          },
          {
            text: ' Ayuda',
            class: 'icon-bubbles3'
          },
          {
            text: ' Cerrar sesión',
            class: 'icon-exit'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
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

  @media (-webkit-min-width: 992px) {   
    .navbar {
      background-color: transparent;
    }
    
    .top-link {
      transition: all .5s;
      border-bottom: 3px solid rgba(0, 188, 212, .5);
    }

    .top-link:hover {
      border-bottom: 3px solid #00BCD4;
    }
  }
</style>
