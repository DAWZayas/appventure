<template>
  <div>
    <div>{{ this.titleText }}</div>
    <form>
      <input v-model="email" type="email" placeholder="Usuario o e-mail" />
      <input v-model="password" type="password" />
      
      <div v-show="this.authError !== ''">
        <button type="button">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong> </strong>{{ this.errorText }}
      </div>  

      <div>
        <div>
          <nuxt-link to="appventure" tag="button"> Iniciar sin usuario </nuxt-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  const titleText = {
    login: '¿Ya eres usario de appventure?, Conectate!',
    signup: '¿Todavia no te has dado de alta?, Registrate!'
  }

  export default {
    data () {
      return {
        isLogin: true,
        email: '',
        password: '',
        authError: ''
      }
    },
    computed: {
      titleText () {
        return this.isLogin ? titleText.login : titleText.signup
      },
      switchButtonText () {
        return this.isLogin ? titleText.signup : titleText.login
      },
      actionButtonText () {
        return this.isLogin ? titleText.signup : titleText.login
      },
      errorText () {
        return this.isLogin ? 'Login: ' + this.authError : 'Signup: ' + this.authError
      }
    }
  }
</script>
<style>

</style>
