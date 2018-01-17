<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 p-2>
        <v-card class="p-2 mb-1 square">
          <h3>Mis Datos</h3>
        </v-card>
        <v-card class="square">
           <v-card-media
            :src="this.src"
            height="200px"
            style="overflow: visible;"
           >
           <v-avatar
              :size="'100px'"
              class="grey lighten-4 yisus"
            >
              <img :src="userPhoto" alt="avatar">
            </v-avatar>
           </v-card-media>
        </v-card>
        <v-card class="p-2 py-5 mt-2 square">
          <div class="d-flex" >
            <div>
              
            </div>
          </div>
        </v-card>
        <br>
        <v-card class="p-2 square">
          <h3>Datos de mi cuenta</h3>
          <hr>
          <div>
            <v-icon>perm_identity</v-icon><span> Nombre: </span> <br>
            <span class="mx-4">{{this.user.displayName}}</span> <br> <br>
            <v-icon>email</v-icon><span> Email: </span> <br>
            <span class="mx-4">{{this.user.email}}</span>
          </div>
        </v-card>
        Tema en negro:
        <v-switch
          @click="changeTheme"
          v-model="isDark"
          :color="isDark === true ? 'red accent-1' : ''"
          hide-details
        ></v-switch>
        <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" lazy>
          <v-btn block color="secondary" slot="activator">Crear torneo</v-btn>
          <v-card>
            <v-toolbar>
              <v-btn icon @click.native="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              <v-toolbar-title>Crear torneo</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <create-tournament-component></create-tournament-component>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import { CreateTournamentComponent } from '~/components/create'

  export default {
    data () {
      return {
        color: this.$vuetify.theme.neutral,
        src: require('~/assets/images/social/material.png'),
        dialog: false
      }
    },
    computed: {
      ...mapGetters({ isDark: 'getDarkTheme', user: 'getUser', userData: 'getUserData', userPhoto: 'getUserPhoto' })
    },
    methods: {
      changeTheme () {
        this.setDarkTheme(!this.isDark)
      },
      ...mapActions(['setDarkTheme'])
    },
    components: {
      CreateTournamentComponent
    }
  }
</script>
<style lang="scss" scoped>
  .square {
    border-radius: 0!important;
    box-shadow: none!important;
  }
  .yisus {
    margin-left: calc( 50% - 50px );
    margin-top: calc( 50% - 50px );
    z-index: 1;
  }
</style>
