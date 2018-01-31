<template>
<div>
  <created-overlay v-show="created"></created-overlay>
  <div>
    <input type="file" ref="imageFile" class="d-none" @change="previewImage" multiple required>
    <v-btn v-if="!uploading" color="info m-0" @click="onClick">{{ btnLabel }}</v-btn>
    <div class="d-flex flex-wrap">
      <div
        v-for="(src, index) in imageSrc" :key="index"
        class="img-preview col-6 col-md-2 p-0"
        :class="(index === defaultImg) && !uploading ? 'defaultImg' : null"
        :style="{ 'background-image': 'url(' + src + ')' }"
        @click="defaultImg = index"
        >
        <overlay :index="index"></overlay>
        <dismiss-img @click.native.stop="dismissImg(index)" v-if="!uploading"></dismiss-img>
        <progress-bar v-show="uploading" :index="index"></progress-bar>
      </div>
    </div>
  </div>
  <div>
    <v-btn flat>Cancelar</v-btn>
    <v-btn :disabled="imageSrc.length === 0" color="secondary" @click="addTournament">Crear torneo</v-btn>
  </div>
</div>
</template>
<script>
  import { mapActions, mapMutations } from 'vuex'
  import { CreatedOverlay, DismissImg, ProgressBar, Overlay } from '~/components/create/utils'

  export default {
    props: ['newArt'],
    methods: {
      addTournament: function () {
        this.uploading = true
        this.uploadImages([...this.imagesBuffer]).then(picUrls => {
          this.newArt.defaultImg = this.defaultImg
          this.newArt.imagesURL = picUrls
          this.setArticleAppventure(this.newArt)
          this.createdF()
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
        if (index <= this.defaultImg && this.defaultImg > 0) {
          this.defaultImg--
        }
      },
      reset () {
        this.imagesBuffer = []
        this.imageSrc = []
        this.clearProgress()
      },
      createdF () {
        this.created = true
        setTimeout(() => {
          this.reset()
          this.$router.push('/')
        }, 3000)
      },
      onClick () { this.$refs.imageFile.click() },
      ...mapActions(['setArticleAppventure', 'uploadImages']),
      ...mapMutations(['clearProgress'])
    },
    watch: {
      imageSrc: function () {
        this.btnLabel = this.imageSrc.length !== 0 ? 'Añadir imágenes' : 'Sube tus imágenes'
      }
    },
    data () {
      return {
        btnLabel: 'Sube tus imágenes',

        imagesBuffer: [],
        imageSrc: [],
        defaultImg: 0,

        confirm: false,
        uploading: false,
        created: false
      }
    },
    components: { CreatedOverlay, DismissImg, ProgressBar, Overlay }
  }
</script>
<style lang="scss" scoped>
  .img-preview {
    max-width: calc( 50% - 1rem );
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    transition: box-shadow .35s;
    margin: .5em .5em 0;

    &:before {
      content: "";
      display: block;
      padding-top: (100% / (16/9));
    }
  }

  .defaultImg {
    box-shadow: inset 0px 0px 10px 5px rgb(41,181,246);
  }
</style>
