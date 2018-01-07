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
      <p class="home-forgot"><a href="#">Forgot Password?</a></p>
    </v-form>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        valid: true,
        email: '',
        password: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>
