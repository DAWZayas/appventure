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
        class="grey lighten-4 "
      >
        <img class="img-style" :src="userPhoto" alt="avatar">
        <v-speed-dial
          v-model="selected"
          id="account-speed"
          absolute
          bottom
          right
        >
          <v-btn
            @click.native.stop="open"
            v-model="selected"
            slot="activator"
            :color="color"
            small
            depressed
            fab
          >
          <v-icon color="grey">add_a_photo</v-icon>
          <transition-group name="list" class="icon">
            <v-icon :key="1" v-if="upload">file_upload</v-icon>
            <v-icon :key="2" v-if="!upload">done</v-icon>
          </transition-group>
          </v-btn>
        </v-speed-dial>
      </v-avatar>
      <input type="file" ref="changeProfilePic" class="d-none" @change="change">
    </v-card-media>
  </v-card>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    methods: {
      open () { this.$refs.changeProfilePic.click() },
      change () {
        this.selected = !this.selected
        this.color = 'primary'
        setTimeout(() => {
          this.upload = !this.upload
          this.color = 'secondary'
        }, 1500)
      }
    },
    computed: { ...mapGetters({ userPhoto: 'getUserPhoto' }) },
    data () {
      return {
        selected: false,
        upload: true,
        color: 'white',
        src: require('~/assets/images/social/material.png')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .img-style {
    border: 4px solid white;
    border-radius: 50%;
  }
</style>
