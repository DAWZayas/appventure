<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" lazy>
    <v-icon slot="activator">library_add</v-icon>
    <v-card>
      <div>
        <v-toolbar>
          <v-btn icon @click="cleanExit">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Formulario para ser creador</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    cleanExit () {
      this.dialog = false
    }
  }
}
</script>
