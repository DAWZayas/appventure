<template>
    <div id="login">
      <h1>Welcome Back!</h1>

    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>

      <v-text-field
        label="Password"
        v-model="password"
        :rules="passRules"
        type="password"
        required
      ></v-text-field>

      <v-btn
        @click="onLogIn"
        block
        :disabled="!valid"
      >
        Log In
      </v-btn>

      <div class="d-flex justify-content-between align-items-center">
        <div>
          <hr>
        </div>
        <div>
          <v-btn
            @click="loginWithFacebook"
          >
          <img :src="this.imgFacebook">
          </v-btn>
        </div>        
        <div style="max-width: 1em"> O </div>
        <div>
          <v-btn
            @click="loginWithGoogle"
          >
          <img :src="this.imgGoogle">
          </v-btn>
        </div>
        <div>
          <hr>
        </div>
      </div>
      <p class="home-forgot"><a href="#">Forgot Password?</a></p>
    </v-form>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import firebase from 'firebase';
  import firebaseApp from '~/firebaseapp';

  export default {
    data () {
      return {
        valid: true,
        email: '',
        password: '',
        imgFacebook: require('../../assets/images/social/facebook.png'),
        imgGoogle: require('../../assets/images/social/google-plus.png'),
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w([\.-]?\w)*@\w([\.-]?\w)*(\.\w{2,3})$/.test(v) || 'E-mail must be valid'
        ],
        passRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length >= 6 || 'Password must be at least 6 characters'
        ]
      }
    },
    methods: {
      ...mapActions(['authenticate']),
      onLogIn () {
        if (this.$refs.form.validate()) {
          this.authenticate({email: this.email, password: this.password})
        }
      },
      loginWithFacebook(){
        let provider = new firebase.auth.FacebookAuthProvider();
        firebaseApp.auth().signInWithPopup(provider).then(function(result) {
          console.log(result)
        }).catch(function(error) {
          console.log(error)
        });
      },
      loginWithGoogle(){
        firebaseApp.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
          firebaseApp.auth().getRedirectResult().catch(function(error) {
            this.error = error;
        }); 
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>
