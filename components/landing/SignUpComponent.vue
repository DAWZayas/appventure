<template>
  <div id="signup">
    <h1>Sign Up for Free</h1>

    <form action="/" method="post">
      <div class="top-row">
        <div class="field-wrap">
          <label>First Name<span class="req">*</span></label>
          <input @keyup="inputStyle" @focus="inputStyle" @blur="inputStyle" type="text" required autocomplete="off">
        </div>

        <div class="field-wrap">
          <label>Last Name<span class="req">*</span></label>
          <input @keyup="inputStyle" @focus="inputStyle" @blur="inputStyle" type="text"required autocomplete="off"/>
        </div>
      </div>

      <div class="field-wrap">
        <label>Email Address<span class="req">*</span></label>
        <input @keyup="inputStyle" @focus="inputStyle" v-model="email" @blur="inputStyle" type="email"required autocomplete="off"/>
      </div>

      <div class="field-wrap">
        <label>Set A Password<span class="req">*</span></label>
        <input @keyup="inputStyle" @focus="inputStyle" v-model="password" @blur="inputStyle" type="password"required autocomplete="off"/>
      </div>

      <div class="button button-block" @click="onRegister">Get Started</div>
      <p class="home-forgot"><nuxt-link to="/appventure/">Go home</nuxt-link></p>
    </form>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      inputStyle (e) {
        var eHthis = e.currentTarget
        var label = eHthis.previousSibling.classList

        if (e.type === 'keyup') {
          eHthis.value === '' ? label.remove('active', 'highlight') : label.add('active', 'highlight')
        } else if (e.type === 'blur') {
          eHthis.value === '' ? label.remove('active', 'highlight') : label.remove('highlight')
        } else if (e.type === 'focus') {
          eHthis.value === '' ? label.remove('highlight') : label.add('highlight')
        }
      },
      ...mapActions(['createUser']),
      onRegister () {
        this.createUser({email: this.email, password: this.password})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>
