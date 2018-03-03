<template>
    <div id="login">
      <h1>¡Bienvenido de nuevo!</h1>

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

      <v-btn
        @click="onLogIn"
        class="square"
        depressed
        block
        :disabled="!valid"
      >
        Entrar
      </v-btn>

      <v-divider></v-divider>

      <div class="d-flex flex-wrap">
        <div class="loginBtn loginBtn--facebook m-1" @click="loginWithFacebook"> Entrar con Facebook</div>
        <div class="loginBtn loginBtn--google m-1" @click="loginWithGoogle"> Entrar con Google</div>
      </div>
      <p class="home-forgot"><nuxt-link to="forgotPassword" >¿Olvidaste la contraseña?</nuxt-link></p>
    </v-form>
    <v-alert v-show="this.authErrorLogIn" type="error" :value="true">
      {{ this.authErrorLogIn }}
    </v-alert>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import firebase from 'firebase'
  import firebaseApp from '~/firebaseapp'

  export default {
    data () {
      return {
        valid: true,
        email: '',
        password: '',
        emailRules: [
          (v) => !!v || 'Este campo es obligatorio',
          (v) => /^\w([.-]?\w)*@\w([.-]?\w)*(\.\w{2,3})$/.test(v) || 'E-mail no valido'
        ],
        passRules: [
          (v) => !!v || 'Este campo es obligatorio',
          (v) => v.length >= 6 || 'La contraseña debe tener más de 5 caracteres'
        ]
      }
    },
    computed: {
      ...mapGetters({authErrorLogIn: 'authErrorLogIn'})
    },
    methods: {
      ...mapActions(['authenticate', 'bindAuth']),
      onLogIn () {
        if (this.$refs.form.validate()) {
          this.authenticate({email: this.email, password: this.password})
        }
      },
      loginWithFacebook () {
        this.loginWithProvider(new firebase.auth.FacebookAuthProvider())
      },
      loginWithGoogle () {
        this.loginWithProvider(new firebase.auth.GoogleAuthProvider())
      },
      loginWithProvider (provider) {
        firebaseApp.auth().signInWithPopup(provider)
          .then(() => {
            this.bindAuth()
            this.$router.push('/')
          }).catch((error) => { this.authError = error })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './style.scss';
  .loginBtn {
    cursor: pointer;
    position: relative;
    padding-left: 3rem;
    border: none;
    text-align: left;
    line-height: 34px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 1.2rem;
    color: #FFF;
  }
  .loginBtn:before {
    cursor: pointer;    
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 100%;
  }

  /* Facebook */
  .loginBtn--facebook {
    background-color: #4C69BA;
    background-image: linear-gradient(#4C69BA, #3B55A0);
    text-shadow: 0 -1px 0 #354C8C;
  }
  .loginBtn--facebook:before {
    border-right: #364e92 1px solid;
    background: url('/login/icon_facebook.png') 6px 6px no-repeat;
  }

  /* Google */
  .loginBtn--google {
    background: #DD4B39;
  }
  .loginBtn--google:before {
    border-right: #BB3F30 1px solid;
    background: url('/login/icon_google.png') 6px 6px no-repeat;
  }
</style>
