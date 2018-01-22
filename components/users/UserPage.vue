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
              id="my-account-avatar"
              class="grey lighten-4 "
            >
              <img class="img-style" :src="userPhoto" alt="avatar">
            </v-avatar>
           </v-card-media>
        </v-card>
        <v-card class="p-2 py-5 mt-2 square">
          <div class="d-flex" >
            <div>
              Logros: <br>
              <v-chip color="orange" text-color="white" class="ml-0" small>
                <v-icon left>build</v-icon>
                Administrador
              </v-chip> <br>
              <v-chip color="indigo" text-color="white" class="ml-0" small>
                <v-avatar>
                  <v-icon>star</v-icon>
                </v-avatar>
                Maestro en csgo
              </v-chip>
            </div>
          </div>
        </v-card>
        <br>
        <v-card class="p-2 square">
          <h3>Datos de mi cuenta</h3>
          <hr>
          <div>
            <v-layout row>
              <v-flex xs2>
                <v-subheader><v-icon>perm_identity</v-icon></v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  v-model="userName"
                  name="input-3"
                  label="Nombre: "
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs2>
                <v-subheader><v-icon>email</v-icon></v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  name="input-3"
                  label="Email: "
                  :value="user.email"
                  disabled
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn
              :loading="loading3"
              @click.native="loader = 'loading3'"
              @click="changeDisplayName()"
              :disabled="loading3"
              color="blue-grey"
              class="white--text"
            >
              Guardar
              <v-icon right dark>save</v-icon>
            </v-btn>
          </div>
        </v-card>
        <br>
        <v-card class="p-2 square">
          Tema en negro:
          <v-switch
            @click="changeTheme"
            v-model="isDark"
            :color="isDark === true ? 'red accent-1' : ''"
            hide-details
          ></v-switch>
        </v-card>
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
        dialog: false,
        userName: null,
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false
      }
    },
    computed: {
      ...mapGetters({ isDark: 'getDarkTheme', user: 'getUser', userData: 'getUserData', userPhoto: 'getUserPhoto', displayName: 'getDisplayName' })
    },
    mounted: function () {
      this.$nextTick(function () {
        this.userName = this.displayName
      })
    },
    methods: {
      changeTheme () {
        this.setDarkTheme(!this.isDark)
      },
      changeDisplayName () {
        this.updateUserName(this.userName)
      },
      ...mapActions(['setDarkTheme', 'updateUserName'])
    },
    components: {
      CreateTournamentComponent
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 2000)

        this.loader = null
      }
    }
  }
</script>
<style lang="scss" scoped>
  .square {
    border-radius: 0!important;
    box-shadow: none!important;
  }
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  .img-style {
    border: 4px solid white;
    border-radius: 50%;
  }
  loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
