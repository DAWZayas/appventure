<template>
  <v-card class="square">
    <v-card-media    
      :src="this.src"
      height="200px"
      style="overflow: visible;"
    >
      <v-avatar
        :size="'100px'"
        id="my-account-avatar"
        class="grey lighten-4"
      >
        <img class="img-style" :src="userPhoto" alt="avatar">
        <v-btn
          @click.native.stop="uploadProfilePic = true"
          id="account-speed"
          :color="'white'"
          absolute
          bottom
          right
          outline
          small
          depressed
          fab
        >
          <v-icon color="white">add_a_photo</v-icon>
        </v-btn>
      </v-avatar>
    </v-card-media>
    <v-dialog v-model="uploadProfilePic" max-width="250px">
      <v-card class="pic">
        <croppa-dialog @closeDialog="uploadProfilePic = false"></croppa-dialog>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { CroppaDialog } from '~/components/users/userComponents'

  export default {
    computed: { ...mapGetters({ userPhoto: 'getUserPhoto' }) },
    data () {
      return {
        uploadProfilePic: false,
        src: '/social/material.png'
      }
    },
    components: { CroppaDialog }
  }
</script>
<style lang="scss" scoped>
  .img-style {
    border: 4px solid white;
    border-radius: 50%;
  }

  .pic {
    border: none!important;
  }
</style>
