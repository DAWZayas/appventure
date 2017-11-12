<template>
  <section class="search-bar">
    <form :class="{ showB: !open }">
      <div class="d-flex align-items-center search-box">
        <span class="search-button fa fa-search"></span>
        <input type="search" placeholder="Buscar nombre de torneo" class="search-bar">
        <span class="search-button fa fa-location-arrow"></span>
      </div>
    </form>
  </section>
</template>
<script>
  export default {
    data () {
      return { open: true }
    },
    events: {
      openSBar: function (open) {
        this.open = !this.open
      }
    }
  }
</script>
<style scoped>
  .search-bar {
    padding: 0;
  }

  .search-box {
      width: 100%;
      background-color: white;
      border-bottom: 1px solid #BDBDBD;
  }

  .search-button {
      padding: 0 .5em;
      margin: 0;
      cursor: pointer;
  }

  input[type=search].search-bar {
      flex-grow: 3;
      margin: 0;
      padding: .5em;
      border: 0;
  }

  input[type=search].search-bar:focus:not([readonly]) {
    border: 0;
    box-shadow: none;
  }

  .search-bar:focus {
    border: 0px;
    box-shadow: none;
  }

  .showB {
    display: none;
  }

  @media (min-width: 992px){
    .search-bar {
      padding: 1em 2em 0;
    }
  }
</style>
