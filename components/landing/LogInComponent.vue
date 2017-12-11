<template>
  <div id="login">
    <h1>Welcome Back!</h1>

    <form action="/" method="post">

      <div class="field-wrap">
        <label>Email Address<span class="req">*</span></label>
        <input @keyup="inputStyle" @focus="inputStyle" @blur="inputStyle" v-model="email" type="email"required/>
      </div>

      <div class="field-wrap">
        <label>Password<span class="req">*</span></label>
        <input @keyup="inputStyle" @focus="inputStyle" @blur="inputStyle" v-model="password" type="password"required />
      </div>

      <div class="button button-block" @click="onLogIn">Log In</div>
      <p class="home-forgot"><a href="#">Forgot Password?</a></p>
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
      ...mapActions(['authenticate']),
      onLogIn () {
        this.authenticate({email: this.email, password: this.password})
        this.$router.push('/appventure')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>
