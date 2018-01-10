<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :key="n"
            :step="n"
            :complete="e1 > n"
            editable
          >
            Step {{ n }}
          </v-stepper-step>
          <v-divider v-if="n !== steps" :key="n"></v-divider>
        </template>
      </v-stepper-header>
      <v-stepper-items>
        oa
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapGetters({
      tournaments: 'getTournaments'
    }),
    addTournament: function () {
      this.uploadImages([...this.input.files]).then(picUrls => {
        const newArt = {
          strong: this.name,
          src: 'esports',
          location: this.location,
          level: this.level,
          imagesURL: picUrls
        }
        this.setArticleAppventure(newArt)
        this.$router.push('/')
      })
    },
    previewImage: function (event) {
      this.input = event.target
      var vm = this

      for (let i = 0; i < this.input.files.length; i++) {
        var reader = new FileReader()

        reader.onload = function (event) {
          vm.imageSrc.push(event.target.result)
        }

        reader.readAsDataURL(vm.input.files[i])
      }
    },
    onClick () {
      this.$refs.imageFile.click()
    },
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
    ...mapActions(['setArticleAppventure', 'uploadImages'])
  },
  data () {
    return {
      e1: 1,
      steps: 3
    }
  },
  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
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
</style>
