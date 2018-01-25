<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" lazy>
    <v-btn fixed
      bottom
      small
      fab
      right
      color="primary"
      class="mb-5" 
      slot="activator"
    >
       <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar>
        <v-btn icon @click.native="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Buscar Torneo</v-toolbar-title>
        <v-spacer></v-spacer>
        
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>
