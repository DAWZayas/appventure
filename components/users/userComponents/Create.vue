<template>
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
</template>
<script>
  import { CreateTournamentComponent } from '~/components/create'

  export default {
    data () { return { dialog: false } },
    components: { CreateTournamentComponent }
  }
</script>
