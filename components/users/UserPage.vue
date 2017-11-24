<template>
  <v-app v-if="isCreator" class="container">
    <v-flex xs12 sm4>
      <v-text-field v-model="name" label="Nombre del torneo"></v-text-field>
      <v-text-field v-model="location" label="Lugar del torneo"></v-text-field>
      <v-text-field value="" type="number" label="Cantidad de participantes" max="1000"></v-text-field>
      <v-text-field value="" type="number" label="Precio por persona" max="100"></v-text-field>
      <v-select :items="difficulty" v-model="level" label="Dificultad"></v-select>

      <v-radio-group>
        <v-radio label="Masculino" value="m"></v-radio>
        <v-radio label="Femenino" value="f"></v-radio>
        <v-radio label="Mixtos" value="mf"></v-radio>
      </v-radio-group>

      <v-select :items="categories.main" v-model="selected" label="Categoría"></v-select>
      <v-select :items="categories[selected]" v-if="selected !== ''" :label="categories['label'][selected]"></v-select>

      <v-dialog v-model="dialog" persistent max-width="290">
        <v-btn block color="secondary" dark slot="activator" @click="addTournament">Crear torneo</v-btn>
        <v-card>
          <v-card-title class="headline">¿Desea crear el torneo ?</v-card-title>
          <v-card-text>Dandole al boton crear, el torneo se creara y no se podrá borrar, tambien acepta la politica de priacidad.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="dialog = true">Cancelar</v-btn>
            <nuxt-link to="/appventure"><v-btn color="green darken-1" flat @click.native="dialog = false">Crear</v-btn></nuxt-link>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-app>
</template>
<script>
  import { SectionPrincipalComponent } from '~/components/common'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        dialog: false,
        categories: {
          main: [
            { text: 'Deportes', value: 'sports' },
            { text: 'e-Sports', value: 'esports' },
            { text: 'Juegos de cartas', value: 'cardgames' },
            { text: 'Motor', value: 'motor' }
          ],
          sports: [
            { text: 'Fútbol', value: 'football' },
            { text: 'Baloncesto', value: 'basketball' },
            { text: 'Padel', value: 'padel' },
            { text: 'Golf', value: 'golf' }
          ],
          esports: [
            { text: 'League of Legends', value: 'lol-esport' },
            { text: 'CSGO', value: 'csgo' },
            { text: 'Dota 2', value: 'dota2' },
            { text: 'FIFA', value: 'fifa-esport' }
          ],
          cardgames: [
            { text: 'Poker', value: 'Poker' }
          ],
          motor: [
            { text: 'Karts', value: 'Karts' },
            { text: 'Rally', value: 'Rally' },
            { text: 'Motos', value: 'Motos' }
          ],
          label: {
            sports: 'Deporte',
            esports: 'Videojuego',
            cardgames: 'Juego',
            motor: 'Carrera'
          }
        },
        difficulty: [
          { text: 'Principiante', value: 'Principiante' },
          { text: 'Medio', value: 'Medio' },
          { text: 'Alto', value: 'Alto' },
          { text: 'Maestro', value: 'Maestro' }
        ],
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
          src: 'esports',
          location: this.location,
          level: this.level
        }
        this.setArticleAppventure(newArt)
      },
      ...mapActions(['setArticleAppventure'])
    }
  }
</script>
