<template>
<div>
  <h5>Categorías</h5>
  <section class="categories">
    <v-chip color="secundary" class="chip" small @click="goToCategory">&#9917; Futbol</v-chip>
    <v-chip color="secundary" class="chip" small @click="goToCategory">&#9918; Padel</v-chip>
    <v-chip color="secundary" class="chip" small>&#127934; Tenis</v-chip>
    <v-chip color="secundary" class="chip" small>&#128664; Karts</v-chip>
    <v-chip color="secundary" class="chip" small>&#127936; Baloncesto</v-chip>
    <v-chip color="secundary" class="chip" small>&#127918; E-Sports</v-chip>
    <v-chip color="secundary" class="chip" small>&#127183; Poker</v-chip>
  </section>
</div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        category: 'sports',
        subcategory: 'Padel'
      }
    },
    methods: {
      goToCategory () {
        let category = this.category
        let subcategory = this.subcategory
        this.filterBy({ category, subcategory })
      },
      ...mapActions(['filterBy'])
    }
  }
</script>

<style scoped>
  .chip {
    max-width: 8rem;
    justify-content: center;
  }
  .categories {
    margin: 0;
    padding: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
