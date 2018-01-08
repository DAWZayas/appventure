<template>
  <div id="signup">
    <h1>Sign Up for Free</h1>

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

      <v-text-field
        label="Confirm password"
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
        Sign Up
      </v-btn>
      <p class="home-forgot"><nuxt-link to="/">Go home</nuxt-link></p>
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
        confirmPassword: '',
        isCreator: false,
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 6 || 'Password must be at least 6 characters'
        ],
        confirmPassRules: [
          (v) => !!v || 'Please confirm your password',
          (v) => (v === this.password) || "Passwords don't match"
        ]
      }
    },
    methods: {
      ...mapActions(['createUser']),
      onRegister () {
        if (this.$refs.form.validate()) {
          this.createUser({email: this.email, password: this.password, name: this.username, creator: this.isCreator})
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>
