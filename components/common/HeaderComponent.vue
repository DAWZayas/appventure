<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <button type="button" class="top-link btn btn-primary">AppVenture</button>
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
    background: url("https://i.imgur.com/OI5u1YI.png")no-repeat center center;
    background-size: cover;
  }

  .top-link {
    padding: 1em .5em;
    border-radius: .5rem;
    margin: 0.25em .5em;
    color: rgb(0, 0, 0);
    cursor: pointer;
  }

  .navbar {
    background-color: #306e64;
  }

  @media (-webkit-min-width: 992px) {   
    .navbar {
      background-color: transparent;
    }
    
    .top-link {
      background-color: rgba(89, 139, 131, .74);
      transition: all .2s;
    }

    .top-link:hover {
      background-color: rgb(89, 139, 131);
    }
  }
</style>
