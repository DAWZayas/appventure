<template>
  <div id="signup">
    <h1>Registrate gratis</h1>

    <v-form v-model="valid" ref="form" lazy-validation>

      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>

      <v-text-field
        label="Contraseña"
        v-model="password"
        :rules="passRules"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        label="Confirmar contraseña"
        v-model="confirmPassword"
        :rules="confirmPassRules"
        type="password"
        required
      ></v-text-field>

      <v-btn
        @click="onRegister"
        block
        :disabled="!valid"
      >
        Registrarse
      </v-btn>
      <p class="home-forgot"><nuxt-link to="/">Ir a la web</nuxt-link></p>
    </v-form>
    <v-alert v-show="signUpError" type="error" :value="true">
      {{ signUpError }}
    </v-alert>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        valid: true,
        email: '',
        password: '',
        confirmPassword: '',
        isCreator: false,
        emailRules: [
          (v) => !!v || 'Este campo es obligatorio',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail no valido'
        ],
        passRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 6 || 'La contraseña debe tener mas de 5 caracteres'
        ],
        confirmPassRules: [
          (v) => !!v || 'Por favor confirme la contraseña',
          (v) => (v === this.password) || 'La contraseña no coincide'
        ]
      }
    },
    computed: {
      ...mapGetters({signUpError: 'signUpError'})
    },
    methods: {
      ...mapActions(['createUser']),
      onRegister () {
        if (this.$refs.form.validate()) {
          this.createUser({ email: this.email, password: this.password })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>
