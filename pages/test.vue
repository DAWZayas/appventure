<template>
<div>
  <div>
    <input type="file" ref="imageFile" class="d-none" @change="previewImage" multiple required>
    <v-btn v-if="!uploading" color="info m-0" @click="onClick">{{ btnLabel }}</v-btn>
    <div class="d-flex flex-wrap">
      <div
        v-for="(src, index) in imageSrc" :key="index"
        class="img-preview col-6 col-md-2 p-0"
        :class="index === defaultImg ? 'defaultImg' : null"
        :style="{ 'background-image': 'url(' + src + ')' }"
        @click="setDefault(index)"
        >
        <div class="complete-overlay">
          <i class="material-icons">done</i>
        </div>
        <i
          aria-hidden="true"
          class="icon material-icons"
          style="position:absolute; top: .25rem; right: .25rem;color: #d34836;cursor: pointer;"
          @click="dismissImg(index)"
        >
          cancel
        </i>
        <v-progress-linear
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
    <v-btn :disabled="imageSrc.length === 0" color="secondary">Crear torneo</v-btn>
  </div>
</div>
</template>
<script>
  export default {
    props: ['newArt'],
    data () {
      return {
        confirm: false,
        imagesBuffer: [],
        imageSrc: [],
        btnLabel: 'Sube tus imágenes',
        uploading: false,
        defaultImg: 0
      }
    },
    methods: {
      setDefault (index) {
        this.defaultImg = index
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
        this.defaultImg = 0
      },
      onClick () { this.$refs.imageFile.click() }
    },
    watch: {
      imageSrc: function () {
        this.btnLabel = this.imageSrc.length !== 0 ? 'Añadir imágenes' : 'Sube tus imágenes'
      }
    }
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
