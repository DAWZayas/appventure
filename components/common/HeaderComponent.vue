<template>
    <header class="">
      <div class="d-flex justify-content-between align-items-center p-1 top-bar">
        <a class="top-link fa fa-bars" @click="handleOnClick"></a>
        <a class="top-link"><span class="logo"/></a>
        <a href="html/login.html" class="top-link icon-user"></a>
      </div>
      <nav :class="{ visible: !isOpened }" class="d-flex flex-column flex-lg-row nav-lateral">
        <a class="top-link nav-item" v-for="(link, index) in topLink" :key="index" :class="link.class">{{ link.text }}</a>
      </nav>
    </header>
</template>
<script>
  export default {
    data () {
      return {
        isOpened: false,
        topLink: [
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
    },
    methods: {
      handleOnClick () {
        this.isOpened = !this.isOpened
      }
    }
  }
</script>
<style lang="scss">
  @import 'assets/icons/style.css';

  .top-bar {
      background-color: #306e64;
  }

  .top-link {
      padding: .5em;
      border-radius: 1em;
      margin: 0.25em .5em;
      color: rgb(0, 0, 0);
      cursor: pointer;
  }

  .nav-lateral {
      justify-content: flex-start;
      border-radius: 0 0 1em;
      position: absolute;
      height: 100vh;
      width: 80%;
      background-color: #306e64;
      transition: all .5s ease-in-out;
  }

  .visible {
      margin-left: -85%;
      transition: all .5s ease-in-out;
  }

  @media (-webkit-min-width: 768px) {
      
    .nav-lateral {
      position: absolute;
      border-radius: 0;
      height: auto;
      width: 100%;
      margin: 0;
    }

    .fa-bars {
        display: none;
    }
    
    main {
      position: relative;
      top: 2.8em;
    }
  }
</style>
