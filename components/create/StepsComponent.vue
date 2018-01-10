
<template>
  <div>
    <v-stepper-content step="1">
      <v-text-field v-model="name" label="Nombre del torneo" required></v-text-field>
      <v-text-field v-model="location" label="Lugar del torneo" required></v-text-field>
      <v-text-field value="" type="number" label="Cantidad de participantes" max="1000" required></v-text-field>
      <v-text-field value="" type="number" label="Precio por persona" max="100" required></v-text-field>
      <v-select :items="difficulty" v-model="level" label="Dificultad"></v-select>
      <v-btn color="primary" @click="nextStep(1)">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-content step="2">
      <v-radio-group required>
        <v-radio label="Masculino" value="m"></v-radio>
        <v-radio label="Femenino" value="f"></v-radio>
        <v-radio label="Mixtos" value="mf"></v-radio>
      </v-radio-group>
      <v-select :items="categories.main" v-model="selected" label="Categoría" required></v-select>
      <v-select :items="categories[selected]" v-if="selected !== ''" :label="categories['label'][selected]" required></v-select>
      <v-btn color="primary" @click="nextStep(2)">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-content step="3">
      <div>
        <input type="file" ref="imageFile" class="d-none" @change="previewImage" multiple required>
        <v-btn color="info m-0" @click="onClick">{{imageSrc ? 'Cambiar imagen' : 'Sube tus imágenes'}}</v-btn>
        <div class="row">
          <div v-for="(src, key) in imageSrc" :key="key"
            class="img-preview col-6 col-md-2 p-0"
            :style="{ 'background-image': 'url(' + src + ')' }"
          ></div>
        </div>
      </div>
      <span v-if="imageSrc.length === 0">Si no seleccionas una imagen, se colocará una por defecto en función de la categoría</span>
      <v-dialog v-model="confirm" persistent max-width="290">
        <v-btn block color="secondary" slot="activator">Crear torneo</v-btn>
        <v-card>
          <v-card-title class="headline">¿Desea crear el torneo?</v-card-title>
          <v-card-text>Dándole al botón crear, el torneo se creará y no se podrá borrar. También acepta la política de privacidad.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="confirm = false">Cancelar</v-btn>
            <v-btn color="green darken-1" flat @click.native="confirm = false" @click="addTournament">Crear</v-btn>
          </v-card-actions>
          <v-btn color="primary" @click="nextStep(0)">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-card>
      </v-dialog>
    </v-stepper-content>
  </div>
</template>


  data () {
    return {
      input: null,
      imageSrc: [],
      e1: 1,
      steps: 3,
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
      selected: '',
      name: '',
      location: '',
      level: '',
      confirm: false
    }
  },