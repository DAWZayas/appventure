<template>
  <div>
    <v-btn flat>Cancelar</v-btn>
    <v-btn :disabled="imagesBuffer.length === 0" color="secondary" @click="addTournament">Crear torneo</v-btn>
  </div>
</template>
<script>
export default {
  props: ['imagesBuffer'],
  methods: {
    addTournament: function () {
      this.uploading = true
      this.uploadImages([...this.imagesBuffer]).then(picUrls => {
        this.newArt.imagesURL = picUrls
        this.setArticleAppventure(this.newArt)
        this.reset()
        this.$router.push('/')
      })
    }
  }
}
</script>
