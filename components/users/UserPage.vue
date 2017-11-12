<template>
  <div>
    <div v-if="isCreator">

      <input type="text" placeholder="Nombre del torneo">

      <select name="categorias" class="">
        <option value="deportes">Deportes</option>
        <option value="esports">E-sports</option>
        <option value="casinos">Juegos de cartas</option>
        <option value="motor">Motor</option>
      </select>

      <p>{{ category }}</p>

      <select v-if="category === 'deportes'" name="categoria-deportes">
        <option value="futbol">Futbol</option>
        <option value="padel">Padel</option>
        <option value="baloncesto">Baloncesto</option>
        <option value="golf">Golf</option>
      </select>

      <select v-if="category === 'esports'" name="categoria-esports">
        <option value="lol">League of Legend</option>
        <option value="csgo">CS:GO</option>
        <option value="dota2">Dota2</option>
        <option value="fifa">Fifa</option>
      </select>

      <select v-if="category === 'casinos'" name="categoria-casinos">
        <option value="poker">Poker</option>
      </select>

      <select v-if="category == 'motor'" name="categoria-motor">
        <option value="Karts">Karts</option>
        <option value="rally">Rally</option>
        <option value="motos">Motos</option>
      </select>
      
      <button type="button" class="btn btn-light-green">Crear torneo</button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isCreator: true,
        category: ''
      }
    },
    methods: {
      whatCategory: function () {
        var lista = document.getElementByTagName('categorias')
        this.category = lista.selectedIndex.value
      }
    }
  }
</script>
<style>
</style>
