<template>
  <div style="text-align: center">
    <croppa v-model="myCroppa"
      @file-choose="preSelected = true"
      :width="250"
      :height="250"
      :prevent-white-space="true"
      :show-remove-button="false"
      placeholder="Seleccionar imagen"
      :placeholder-font-size="16"
      :show-loading="true"
      :loading-size="50"
      :loading-color="'#606060'">
      <svg v-if="preSelected" class="overlay-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <defs><style>.corner{fill: rgba(0,0,0,.25);}</style></defs>
        <path class="corner" d="M94.3,0H0V91.4A100.4,100.4,0,0,1,94.3,0Z"/>
        <path class="corner" d="M0,108.9V200H90A100.4,100.4,0,0,1,0,108.9Z"/>
        <path class="corner" d="M200,90.1V0H105.8A100.4,100.4,0,0,1,200,90.1Z"/>
        <path class="corner" d="M200,110.2A100.4,100.4,0,0,1,110.1,200H200Z"/>
      </svg>
      <i class="icon material-icons dismiss" v-if="preSelected" @click="myCroppa.remove(); preSelected = false">cancel</i>
      <transition name="fade">
      <div class="complete-overlay" v-if="uploaded">
        <i class="material-icons">done</i>
      </div></transition>
    </croppa>
    <v-card-actions>
      <v-btn block :color="uploaded ? 'secondary' : 'primary'" :disabled="!preSelected" @click.stop.native="uploadCroppedImage">Actualizar</v-btn>
      <v-btn block @click.stop.native="closeDialog">Cancelar</v-btn>
    </v-card-actions>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        preSelected: false,
        uploaded: false,
        myCroppa: {}
      }
    },
    methods: {
      ...mapActions(['uploadProfilePic', 'updatePhotoURL']),
      uploadCroppedImage () {
        this.myCroppa.generateBlob((blob) => {
          this.uploadProfilePic(blob).then((picURL) => {
            this.updatePhotoURL(picURL)
            this.uploaded = true
            this.preSelected = false
          })
        })
      },
      closeDialog () {
        let cleanDialog = new Promise((resolve) => {
          this.myCroppa.remove()
          this.preSelected = false
          this.uploaded = false
        })

        cleanDialog.then(this.$emit('closeDialog'))
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'vue-croppa/dist/vue-croppa.css';

  .overlay-circle {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  .dismiss {
    position:absolute;
    top: .25rem;
    right: .25rem;
    color: #d34836;
    cursor: pointer;
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
