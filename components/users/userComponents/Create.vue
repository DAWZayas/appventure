<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" lazy>
    <v-btn block color="secondary" slot="activator">Crear torneo</v-btn>
    <v-card>
      <create-tournament-component @cleanExit="dialog = false"></create-tournament-component>
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
