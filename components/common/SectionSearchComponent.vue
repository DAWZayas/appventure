<template>
  <section class="search-bar">
    <form>
      <div class="d-flex align-items-center search-box">
        <span class="search-button fa fa-search"></span>
        <input type="search" placeholder="Buscar nombre de torneo" class="search-bar">
        <span class="search-button fa fa-location-arrow"></span>
      </div>
    </form>
  </section>
</template>
<script>
</script>
<style scoped>

  .search-bar {
    padding: 1em 1em 0;
  }

  .search-box {
      width: 100%;
      background-color: white;
      border: 1px solid black;
  }

  .search-button {
      padding: 0 1em;
      margin: 0;
      cursor: pointer;
  }

  input[type=search].search-bar {
      flex-grow: 3;
      margin: 0;
      padding: 1em;
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
</style>
