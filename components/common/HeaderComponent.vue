<template>
    <header class="flex">
        <div class="flex top-bar">
            <a class="top-link icon-menu"></a>
            <a class="top-link"><span class="logo"/></a>
            <a href="html/login.html" class="top-link icon-user"></a>
        </div>    
        <nav class="flex nav-lateral">
           <a class="top-link desk-top-link icon-home3"> Tu cuenta</a>
           <a class="top-link desk-top-link icon-trophy"> Mis torneos</a>
           <a class="top-link desk-top-link icon-stats-dots"> Clasificación</a>
           <a class="top-link desk-top-link icon-bubbles3"> Ayuda</a>
           <a class="top-link desk-top-link icon-exit"> Cerrar sesión</a>
        </nav>
    </header>
</template>
<script>
  export default {
  }
</script>
<style>
  .flex {
    display: flex;
  }

  .top-bar {
    justify-content: space-between;
    background-color: #306e64;
    align-items: center;
    margin: -1em;
  }

  .top-link {
      padding: .5em;
      border-radius: 1em;
      margin: 0.25em .5em;
      color: rgb(0, 0, 0, .7);
      cursor: pointer;
  }

  .nav-lateral {
      flex-direction: column;
      justify-content: flex-start;
      border-radius: 0 0 1em;
      position: absolute;
      height: 100vh;
      width: 80%; 
      margin-left: -1em;
      background-color: #306e64;
      transition: all .5s ease-in-out;
  }

  .none {
      margin-left: -85%;
      transition: all .5s ease-in-out;
  }
</style>
