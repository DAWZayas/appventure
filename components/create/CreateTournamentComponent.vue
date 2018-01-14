<template>
  <div>
    <v-stepper v-model="step">
      <v-stepper-header>
        <div v-for="n in 3" :key="n">
          <v-stepper-step
            :step="n"
            :complete="step > n"
            editable
          >
            Step {{ n }}
          </v-stepper-step>
          <v-divider v-if="n !== 3" :key="n"></v-divider>
        </div>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-text-field v-model="name" label="Nombre del torneo" required></v-text-field>
          <v-text-field v-model="location" label="Lugar del torneo" required></v-text-field>
          <v-text-field value="" type="number" label="Cantidad de participantes" max="1000" required></v-text-field>
          <v-text-field value="" type="number" label="Precio por persona" max="100" required></v-text-field>
          <v-select :items="difficulty" v-model="level" label="Dificultad"></v-select>
          <v-btn color="primary" @click="step = 2">Continue</v-btn>
          <v-btn flat>Cancelar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-radio-group required>
            <v-radio label="Masculino" value="m"></v-radio>
            <v-radio label="Femenino" value="f"></v-radio>
            <v-radio label="Mixtos" value="mf"></v-radio>
          </v-radio-group>
          <v-select :items="categories.main" v-model="selected" label="Categoría" required></v-select>
          <v-select :items="categories[selected]" v-if="selected !== ''" :label="categories['label'][selected]" required></v-select>
          <v-btn color="primary" @click="step = 3">Continue</v-btn>
          <v-btn flat>Cancelar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <div>
            <input type="file" ref="imageFile" class="d-none" @change="previewImage" multiple required>
            <v-btn color="info m-0" @click="onClick">{{imageSrc.length !== 0 ? (imageSrc.length === 1 ? 'Cambiar imagen' : 'Cambiar imágenes') : 'Sube tus imágenes'}}</v-btn>
            <div class="row m-0">
              <div v-for="(src, index) in imageSrc" :key="index" class="img-preview col-6 col-md-2 p-0"
                :style="{ 'background-image': 'url(' + src + ')' }"
                >
                <i v-if="!uploading"
                   aria-hidden="true"
                   class="icon material-icons"
                   style="position:absolute; top: .25rem; right: .25rem;color: #d34836;cursor: pointer;"
                   @click="dismissImg(index)"
                >
                  cancel
                </i>
                <v-progress-linear
                  v-if="uploadProgress[index]"
                  v-model="uploadProgress[index]"
                  :active="true"
                  height="3" 
                  color="blue"
                  background-color="blue-grey"
                  class="m-0"
                  style="position: absolute; bottom: 0;"
                ></v-progress-linear>
              </div>
            </div>
          </div>
          <span v-if="imageSrc.length === 0">Si no seleccionas una imagen, se colocará una por defecto en función de la categoría</span>
          <div>
            <v-btn flat>Cancelar</v-btn>
          </div>
          <v-dialog v-model="confirm" persistent max-width="290">
            <v-btn color="secondary" slot="activator">Crear torneo</v-btn>
            <v-card>
              <v-card-title class="headline">¿Desea crear el torneo?</v-card-title>
              <v-card-text>Dándole al botón crear, el torneo se creará y no se podrá borrar. También acepta la política de privacidad.</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click.native="confirm = false">Cancelar</v-btn>
                <v-btn color="green darken-1" flat @click.native="confirm = false" @click="addTournament">Crear</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import { StepsComponent } from '~/components/create'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    addTournament: function () {
      this.uploading = true
      this.uploadImages([...this.imagesBuffer]).then(picUrls => {
        const newArt = {
          strong: this.name,
          src: 'esports',
          location: this.location,
          level: this.level,
          imagesURL: picUrls
        }
        this.clearProgress()
        this.setArticleAppventure(newArt)
        this.$router.push('/')
      })
    },
    previewImage (event) {
      Array.prototype.push.apply(this.imagesBuffer, event.target.files)
      // Clears the input field
      event.target.value = ''
      this.imageSrc = []
      var vm = this

      for (let i = 0; i < this.imagesBuffer.length; i++) {
        var reader = new FileReader()

        reader.onload = (event) => {
          vm.imageSrc.push(event.target.result)
        }

        reader.readAsDataURL(vm.imagesBuffer[i])
      }
    },
    dismissImg (index) {
      this.imageSrc.splice(index, 1)
      this.imagesBuffer.splice(index, 1)
    },
    onClick () { this.$refs.imageFile.click() },
    ...mapActions(['setArticleAppventure', 'uploadImages']),
    ...mapMutations(['clearProgress'])
  },
  computed: {
    ...mapGetters({ tournaments: 'getTournaments', uploadProgress: 'getProgress' })
  },
  components: {
    StepsComponent
  },
  data () {
    return {
      confirm: false,
      imagesBuffer: [],
      imageSrc: [],
      step: 1,
      uploading: false,

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
      level: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .img-preview {
    width: 50%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    &:before {
      content: "";
      display: block;
      padding-top: (100% / (16/9));
    }
  }

  .stepper {
    box-shadow: none!important;
  }
</style>
