<template>
  <v-flex xs12 sm4>
    <v-switch
      @click="changeTheme"
      v-model="isDark"
      :color="isDark === true ? 'red accent-1' : ''"
      hide-details
    ></v-switch>

    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
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
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import { CreateTournamentComponent } from '~/components/common'

  export default {
    data () {
      return {
        dialog: false
      }
    },
    computed: {
      ...mapGetters({
        isDark: 'getDarkTheme'
      })
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
