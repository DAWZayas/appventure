<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn fixed
      bottom
      small
      fab
      right
      color="primary"
      class="mb-5" 
      slot="activator"
    >
       <v-icon>search</v-icon>
    </v-btn>
    <v-card>
      <v-card-text>
        <v-flex>
          <v-text-field color="primary" placeholder=" Search..." hide-details autofocus :append-icon="'search'" :append-icon-cb="searchCb"></v-text-field>
          <v-select
            :items="categories.main"
            v-model="category"
            label="Categoría"
            single-line
            auto
            append-icon="touch_app"
            hide-details
          ></v-select>
          <v-select 
            :items="categories[category]" 
            v-if="category !== ''" 
            :label="categories['label'][category]" 
            v-model="subCategory"
            single-line
            auto
            append-icon="touch_app"
            hide-details
          ></v-select>
        </v-flex>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Cerrar</v-btn>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Buscar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  methods: {
    searchCb () { console.log('search-cb') }
  },
  data () {
    return {
      dialog: false,
      category: '',
      subCategory: '',
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
      }
    }
  }
}
</script>
