<template>
<div>
  <h5>Categorías</h5>
  <section class="categories">
    <v-chip color="secundary" class="chip" small @click="goToCategory('sports', 'football')">&#9917; Fútbol</v-chip>
    <v-chip color="secundary" class="chip" small @click="goToCategory('sports', 'padel')">&#127934; Padel</v-chip>
    <v-chip color="secundary" class="chip" small @click="goToCategory('sports', 'golf')">&#127948; Golf</v-chip>
    <v-chip color="secundary" class="chip" small @click="goToCategory('motor', 'karts')">&#128664; Karts</v-chip>
    <v-chip color="secundary" class="chip" small @click="goToCategory('sports', 'basketball')">&#127936; Baloncesto</v-chip>
    <v-chip color="secundary" class="chip" small @click="goToCategory('esports')">&#127918; E-Sports</v-chip>
    <v-chip color="secundary" class="chip" small @click="goToCategory('cardgames', 'poker')">&#127183; Poker</v-chip>
  </section>
</div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      goToCategory (category, subcategory) {
        this.filterBy({ category, subcategory })
        this.$router.push('filteredTournaments')
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
