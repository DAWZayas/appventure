<template>
    <header class="flex">
      <div class="flex top-bar">
        <a class="top-link icon-menu" @click="handleOnClick"> Hola</a>
        <a class="top-link"><span class="logo"/></a>
        <a href="html/login.html" class="top-link icon-user"></a>
      </div>
      <nav :class="{ none: !isOpened }" class="flex nav-lateral">
        <a class="top-link" v-for="(link, index) in topLink" :key="index" :class="link.class">{{ link.text }}</a>
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
  
  .flex {
    display: flex;
  }

  .top-bar {
      width: 100%;
      justify-content: space-between;
      background-color: #306e64;
      align-items: center;
  }


  .top-link {
      padding: .5em;
      border-radius: 1em;
      margin: 0.25em .5em;
      color: rgb(0, 0, 0);
      cursor: pointer;
  }

  .nav-lateral {
      flex-direction: column;
      justify-content: flex-start;
      border-radius: 0 0 1em;
      position: absolute;
      height: 100vh;
      width: 80%; 
      margin-top: 3em;
      background-color: #306e64;
      transition: all .5s ease-in-out;
  }

  .none {
      margin-left: -85%;
      transition: all .5s ease-in-out;
  }

  @media (-webkit-min-width: 768px) {
      
      .nav-lateral {
          flex-direction: row;
          justify-content: space-between;
          border-radius: 0;
          margin: 2em 0 0;
          padding-bottom: .5em;
          height: auto;
          width: 100%;
      }
      
      main {
          padding-top: 4em;
      }
      
      .icon-menu {
          display: none;        
      }
  }
</style>
