<template>
  <section>
    <form>
      <div class="flex search-box">
        <span class="search-button icon-search"></span>
        <input type="search" placeholder="Buscar nombre de torneo" class="search-bar"/>
        <span class="search-button icon-location2"></span>
      </div>
    </form>
  </section>
</template>
<script>
</script>
<style lang="css">

  .search-box {
      width: 100%;
      background-color: white;
      margin: 2em 0 0;
      align-items: center;
      border: 1px solid black;
  }

  .search-button {
      padding: 0 .5em;
      margin: 0;
      cursor: pointer;
  }

  .search-bar {
      flex-grow: 3;
      margin: 0;
      padding: 1em;
      border: 0;
  }

</style>
