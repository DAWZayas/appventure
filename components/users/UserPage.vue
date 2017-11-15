<template>
  <div>
    <div v-if="isCreator" class="formulario d-flex flex-column">
      <div>
        <input v-model="name" value="" type="text" placeholder="Nombre del torneo">
        <input v-model="location" value="location" type="text" placeholder="Lugar del torneo">
        <input value="" type="number" placeholder="Cantidad de participantes" max="1000">
        <input value="" type="number" placeholder="Precio por persona" max="100">
        <input v-model="level" value="level" type="text" placeholder="Dificultad" max="100">

        <div class="d-flex align-items-center genre">
          <input type="radio" name="genero" value="masculino"><p>Masculino</p>
          <input type="radio" name="genero" value="femenino"><p>Femenino</p>
          <input type="radio" name="genero" value="mixto"><p>Mixto</p>
        </div>

      </div>
      <div class="select">
      <select class="select-style" v-model="selected" id="categorias" >
        <option value="deportes">Deportes</option>
        <option value="esports">E-sports</option>
        <option value="casinos">Juegos de cartas</option>
        <option value="motor">Motor</option>
      </select>
      <div class="select_arrow"></div>
      </div>


      <div class="categories">
        <div class="select">
        <select v-if="selected == 'deportes'" name="categoria-deportes">
          <option value="futbol">Futbol</option>
          <option value="baloncesto">Baloncesto</option>
          <option value="Padel">Padel</option>
          <option value="Golf">Golf</option>
        </select>
        <div v-show="selected == 'deportes'" class="select_arrow"></div>
        </div>

        <div class="select">
        <select v-if="selected == 'esports'" name="categoria-esports">
          <option value="lol">League of Legends</option>
          <option value="csgo">CS:GO</option>
          <option value="dota2">Dota2</option>
          <option value="fifa">Fifa</option>
        </select>
        <div v-show="selected == 'esports'" class="select_arrow"></div>
        </div>

        <div class="select">
        <select v-if="selected == 'casinos'" name="categoria-casinos">
          <option value="poker">Poker</option>
        </select>
        <div v-show="selected == 'casinos'" class="select_arrow"></div>
        </div>

        <div class="select">
        <select v-if="selected == 'motor'" name="categoria-motor">
          <option value="Karts">Karts</option>
          <option value="rally">Rally</option>
          <option value="motos">Motos</option>
        </select>
        <div v-show="selected == 'motor'" class="select_arrow"></div>
        </div>
      </div>

    </div>
    <button @click="addTournament" type="button" class="btn btn-light-green">Crear torneo</button>
  </div>
</template>
<script>
  import { SectionPrincipalComponent } from '~/components/common'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        isCreator: true,
        selected: '',
        name: '',
        location: '',
        level: ''
      }
    },
    computed: {
      ...mapGetters({
        tournaments: 'getTournaments'
      })
    },
    components: {
      SectionPrincipalComponent
    },
    methods: {
      addTournament: function () {
        const newArt = {
          strong: this.name,
          src: 'https://footballmadeinghana.com/wp-content/uploads/2017/10/IMG-20171002-WA0103-1024x720.jpg',
          location: this.location,
          level: this.level
        }
        this.setArticleAppventure(newArt)
      },
      ...mapActions(['setArticleAppventure'])
    }
  }
</script>
<style scoped>
  .genre > * {
    margin: .5em .3em .5em .1em;
  }
  .formulario {
    margin: 1em 10%;
  }
  .categories{ 
    margin-top: 0.5em;
  }
</style>
