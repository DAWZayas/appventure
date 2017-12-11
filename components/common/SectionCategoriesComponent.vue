<template>
  <div>
    <h6>Categorías</h6>
    <section class="categories row justify-content-center">
      <v-chip class="chip" small outline>&#9917; Futbol</v-chip>
      <v-chip class="chip" small outline>&#9918; Padel</v-chip>
      <v-chip class="chip" small outline>&#127934; Tenis</v-chip>
      <v-chip class="chip" small outline>&#128664; Karts</v-chip>
      <v-chip class="chip" small outline>&#127936; Baloncesto</v-chip>
      <v-chip class="chip" small outline>&#127918; E-Sports</v-chip>
      <v-chip class="chip" small outline>&#127183; Poker</v-chip>
    </section>
  </div>
</template>
<style scoped>
  .chip {
    max-width: 8em;
    justify-content: center;
  }
  h6 {
    margin: 0;
    padding: .5em 1em 0;
    color: #757575
  }
  .categories {
    margin: 0;
    padding: .5em 0em;
    background-color: white;
  }
</style>
