<template>
  <section class="d-flex justify-content-center">
    <div class="form">
      <div class="logo">
        <img :src="logo" alt="AppVenture" class="my-4">
      </div>
      <div class="tab-content">
        <div id="login">
          <h3>Recupere su contraseña</h3>
          <p>Introduce el e-mail asociado a tu cuenta de AppVenture y te enviaremos un enlace para restaurar tu contraseña.</p>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
          </v-form>
          <v-btn
              @click="sendEmail"
              block
              :disabled="!valid"
          >
            Entrar
          </v-btn>
          <p class="home-forgot"><nuxt-link to="/">Ir a la web</nuxt-link></p>
          <v-alert v-show="this.authErrorForgotPassword" type="error" :value="true">
            {{ this.authErrorForgotPassword }}
          </v-alert>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        logo: require('~/assets/logo.svg'),
        email: '',
        valid: false,
        emailRules: [
          (v) => !!v || 'Este campo es obligatorio',
          (v) => /^\w([.-]?\w)*@\w([.-]?\w)*(\.\w{2,3})$/.test(v) || 'E-mail no valido'
        ]
      }
    },
    computed: {
      ...mapGetters({authErrorForgotPassword: 'authErrorForgotPassword'})
    },
    methods: {
      ...mapActions(['recoverPassword']),
      sendEmail () {
        console.log(this.email)
        this.recoverPassword({email: this.email})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './style.scss';
  $primary-blue: #00BCD4; // #179b77;
  $dark-blue: #0097A7; // #1ab188;
  $soft-grey: #a0b3b0;

  .hide {
    display: none;
  }

  section {
    height: 100vh;
    min-width: 16em;
    background: rgba(19, 35, 47, 0.9);
  }

  .logo {
    text-align: center;

    img {
      max-width: 7em;
    }
  }

  .form {
    width: 100%;
    padding: 0 1em 1em;
    max-width: 40em;
  }

  .tab-group {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 2em;

    &:after {
      content: "";
      display: table;
      clear: both;
    }

    li a {
      display: block;
      text-decoration: none;
      padding: 1em;
      background: rgba(160, 179, 176, 0.25);
      color: $soft-grey;
      font-size: 1.2em;
      float: left;
      width: 50%;
      text-align: center;
      cursor: pointer;
      transition: .5s ease;

      &:hover {
        background: $primary-blue;
        color: white;
      }
    }

    .active a {
      background: $dark-blue;
      color: white;
    }
  }

  h3 {
    text-align: center;
    color: white;
    font-weight: 300;
    margin: 0 0 2em;
  }

  p {
    color: $dark-blue;
  }

  @media (min-width: 992px) {
    section {
      padding-top: 6em;
    }
  }

</style>

