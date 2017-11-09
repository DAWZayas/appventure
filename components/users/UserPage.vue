<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.1/css/mdb.min.css">
    <header-component></header-component>
    <div v-if="isCreator">

      <input type="text" placeholder="Nombre del torneo">

      <select name="categorias" class="">
        <option value="deportes">Deportes</option>
        <option value="esports">E-sports</option>
        <option value="casinos">Juegos de cartas</option>
        <option value="motor">Motor</option>
      </select>

      <select v-if="isDeportes" name="categoria-deportes">
        <option value="futbol">Futbol</option>
        <option value="padel">Padel</option>
        <option value="baloncesto">Baloncesto</option>
        <option value="golf">Golf</option>
      </select>

      <select v-if="isEsports" name="categoria-esports">
        <option value="lol">League of Legend</option>
        <option value="csgo">CS:GO</option>
        <option value="dota2">Dota2</option>
        <option value="fifa">Fifa</option>
      </select>

      <select v-if="isCasinos" name="categoria-casinos">
        <option value="poker">Poker</option>
      </select>

      <select v-if="isMotor" name="categoria-motor">
        <option value="Karts">Karts</option>
        <option value="rally">Rally</option>
        <option value="motos">Motos</option>
      </select>
      
      <nuxt-link type="button" class="btn btn-light-green">Crear torneo</nuxt-link>
    </div>
  </div>
</template>
<script>
  import { HeaderComponent } from '~/components/common'

  export default {
    data () {
      return {
        isCreator: true
        }
      }
    }
    components: {
      HeaderComponent
    }
    methods: {
      selectedIndex: function () {
        this.selectedIndex = this.options.indexOf(this.)
      }
    }
</script>
<style>

</style>
