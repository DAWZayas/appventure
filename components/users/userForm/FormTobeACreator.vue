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
        <transition name="fade">
          <v-alert class="m-2" type="info" v-if="!checkbox" :value="true">
            <p>Este formulario esta pensado para organizadores de eventos, polideportivos etc, advertimos que guardaremos toda la informacion
            que se rellene en el formulario.</p>
          </v-alert>
        </transition>
        <v-subheader>Rellenar formulario</v-subheader>
        <v-form v-model="valid" ref="form" class="mx-2 px-2">
          <v-text-field
            label="Nombre"
            v-model="name"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            label="Empresa o Ayuntamiento"
            v-model="company"
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            label="Numero de telefono"
            single-line
            prepend-icon="phone"
            mask="social"
          ></v-text-field>
          <v-checkbox
            label="Politica de privacidad"
            v-model="checkbox"
            :rules="[v => !!v || '¡Marque la casilla para continuar!']"
            required
            color="info"
          ></v-checkbox>
          <v-btn
            @click="submit"
            :disabled="!valid"
            color="info"
          >
            <v-icon>send</v-icon> Solicitar
          </v-btn>
          <v-btn color="error" @click="clear"><v-icon>delete</v-icon> Limpiar</v-btn>
        </v-form>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es obligatorio'
      ],
      company: '',
      companyRules: [
        v => !!v || 'La empresa es obligatoria'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El E-mail es onligatorio',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail no valido'
      ],
      phoneRules: [

      ],
      checkbox: false
    }
  },
  methods: {
    ...mapActions(['setUserType']),
    cleanExit () {
      let clean = new Promise(() => {
        this.$refs.form.reset()
      })
      clean.then(this.dialog = false)
    },
    submit () {
      if (this.$refs.form.validate()) {
        this.setUserType('Administrador').then(this.cleanExit())
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
