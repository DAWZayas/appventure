<template>
  <section class="search-bar">
    <form>
      <div class="flex search-box">
        <span class="search-button icon-search"></span>
        <input type="search" placeholder="Buscar nombre de torneo" class="search-bar">
        <span class="search-button icon-location2"></span>
      </div>
    </form>
  </section>
</template>
<script>
</script>
<style lang="css">

  .search-bar {
    padding: 1em 1em 0;
  }

  .search-box {
      width: 100%;
      background-color: white;
      align-items: center;
      border: 1px solid black;
  }

  .search-button {
      padding: 0 .5em;
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
