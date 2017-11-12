<template>
  <div>
    <div v-if="isCreator" class="formulario flex-column">

      <div class="div-inputs">

        <input v-model="name" value="name" type="text" placeholder="Nombre del torneo">
        <input v-modal="location" value="location" type="text" placeholder="Lugar del torneo">
        <input value="" type="number" placeholder="Cantidad de participantes" max="1000">
        <input value="" type="number" placeholder="Precio por persona" max="100">
        <input v-modal="level" value="level" type="text" placeholder="Dificultad" max="100">

        <div class="flex-row">
          <input type="radio" name="genero" value="masculino">Masculino
          <input type="radio" name="genero" value="femenino">Femenino
          <input type="radio" name="genero" value="mixto">Mixto
        </div>

      </div>
      
      <select v-model="selected" id="categorias" >
        <option value="deportes">Deportes</option>
        <option value="esports">E-sports</option>
        <option value="casinos">Juegos de cartas</option>
        <option value="motor">Motor</option>
      </select>

      <div class="categories">
        <select v-if="selected == 'deportes'" name="categoria-deportes">
          <option value="futbol">Futbol</option>
          <option value="baloncesto">Baloncesto</option>
          <option value="Padel">Padel</option>
          <option value="Golf">Golf</option>
        </select>

        <select v-if="selected == 'esports'" name="categoria-esports">
          <option value="lol">League of Legend</option>
          <option value="csgo">CS:GO</option>
          <option value="dota2">Dota2</option>
          <option value="fifa">Fifa</option>
        </select>

        <select v-if="selected == 'casinos'" name="categoria-casinos">
          <option value="poker">Poker</option>
        </select>

        <select v-if="selected == 'motor'" name="categoria-motor">
          <option value="Karts">Karts</option>
          <option value="rally">Rally</option>
          <option value="motos">Motos</option>
        </select>
      </div>

    </div>
    <button @click="pushArray" type="button" class="btn btn-light-green">Crear torneo</button>
  </div>
</template>
<script>
  export default {
    props: ['tournament'],
    data () {
      return {
        isCreator: true,
        selected: '',
        name: '',
        location: '',
        level: ''
      }
    },
    methods: {
      pushArray: function () {
        var newArt = new Object();
        newArt.strong = this.name
        newArt.src = 'https://footballmadeinghana.com/wp-content/uploads/2017/10/IMG-20171002-WA0103-1024x720.jpg'
        newArt.location = this.location
        newArt.level = this.level

        tournment.push(newArt)
      }
    }
  }
</script>
<style>
  * + * {
    margin-top: 0.5em;
  }
  div > * + * {
    margin-top: 0.5em;
  }
  .formulario {
    margin: 1em 10%;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .categories{ 
    margin-top: 0.5em;
  }
  select {
    width: 10em;
  }
  div-inputs {
    width: 18em;
  }
</style>
