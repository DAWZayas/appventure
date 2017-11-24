<template>
  <div>
    <h6>Categorías</h6>
    <section class="categories d-flex flex-wrap justify-content-around">
      <v-chip class="chip" small outline color="primary">&#9917; Futbol</v-chip>
      <v-chip class="chip" small outline color="primary">&#9918; Padel</v-chip>
      <v-chip class="chip" small outline color="primary">&#127934; Tenis</v-chip>
      <v-chip class="chip" small outline color="primary">&#128664; Karts</v-chip>
      <v-chip class="chip" small outline color="primary">&#127936; Baloncesto</v-chip>
      <v-chip class="chip" small outline color="primary">&#127918; E-Sports</v-chip>
      <v-chip class="chip" small outline color="primary">&#127183; Poker</v-chip>
      <v-chip class="chip" small outline color="primary">&#9917; Futbol</v-chip>
    </section>
  </div>
</template>
<script>
</script>
<style scoped>
  .chip {
    max-width: 8em!important;
    justify-content: center!important;
  }
  h6 {
    margin: 0;
    padding: .5em 1em 0;
    color: #757575
  }
  .categories {
    padding: 0.5em 0.5em 1em;
    background-color: white;
  }
  .categories > article {
    font-size: .9em;
    margin: .2em;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    padding: 0.1em;
    border-radius: .25em;
  }
</style>
