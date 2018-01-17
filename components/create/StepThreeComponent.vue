<template>
<div>
  <div>
    <input type="file" ref="imageFile" class="d-none" @change="previewImage" multiple required>
    <v-btn v-if="!uploading" color="info m-0" @click="onClick">{{ btnLabel }}</v-btn>
    <div class="row m-0">
      <div v-for="(src, index) in imageSrc" :key="index" class="img-preview col-6 col-md-2 p-0"
        :style="{ 'background-image': 'url(' + src + ')' }"
        >
        <div class="complete-overlay" v-if="uploadProgress[index] === 100">
          <i class="material-icons">done</i>
        </div>
        <i v-if="!uploading"
            aria-hidden="true"
            class="icon material-icons"
            style="position:absolute; top: .25rem; right: .25rem;color: #d34836;cursor: pointer;"
            @click="dismissImg(index)"
        >
          cancel
        </i>
        <v-progress-linear
          v-if="uploading"
          v-model="uploadProgress[index]"
          :active="true"
          color="blue"
          background-color="blue-grey"
          class="m-0"
          style="position: absolute; bottom: 0;"
        ></v-progress-linear>
      </div>
    </div>
  </div>
  <div>
    <v-btn flat>Cancelar</v-btn>
    <v-dialog v-model="confirm" persistent max-width="290">
      <v-btn :disabled="imageSrc.length === 0" color="secondary" slot="activator">Crear torneo</v-btn>
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
  </div>
</div>
</template>
<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    props: ['newArt'],
    data () {
      return {
        confirm: false,
        imagesBuffer: [],
        imageSrc: [],
        btnLabel: 'Sube tus imágenes',
        uploading: false
      }
    },
    methods: {
      addTournament: function () {
        this.uploading = true
        this.uploadImages([...this.imagesBuffer]).then(picUrls => {
          this.newArt.imagesURL = picUrls
          this.setArticleAppventure(this.newArt)
          this.reset()
          this.$router.push('/')
        })
      },
      previewImage (event) {
        var vm = this

        for (let i = 0; i < event.target.files.length; i++) {
          var reader = new FileReader()

          reader.onload = (event) => {
            vm.imageSrc.push(event.target.result)
          }

          reader.readAsDataURL(event.target.files[i])
        }
        // Clears the input field
        Array.prototype.push.apply(this.imagesBuffer, event.target.files)
        event.target.value = ''
      },
      dismissImg (index) {
        this.imageSrc.splice(index, 1)
        this.imagesBuffer.splice(index, 1)
      },
      reset () {
        this.imagesBuffer = []
        this.imageSrc = []
        this.clearProgress()
      },
      onClick () { this.$refs.imageFile.click() },
      ...mapActions(['setArticleAppventure', 'uploadImages']),
      ...mapMutations(['clearProgress'])
    },
    computed: { ...mapGetters({uploadProgress: 'getProgress'}) },
    watch: {
      imageSrc: function () {
        this.btnLabel = this.imageSrc.length !== 0 ? 'Añadir imágenes' : 'Sube tus imágenes'
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

  .complete-overlay {
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    i {
      color: #8bc34a;
      font-size: 4rem;
      position: absolute;
      top: calc( 50% - 2rem );
      left: calc( 50% - 2rem );
    }
  }
</style>
