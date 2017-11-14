<template>
<div>
  <section class="d-flex justify-content-center">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <div class="form">
      <div class="logo">
        <img :src="logo" alt="AppVenture">  
      </div>
      <ul class="tab-group">
        <li class="tab active" @click.prevent="toggleLog"><a href="#signup">Sign Up</a></li>
        <li class="tab" @click.prevent="toggleLog"><a href="#login">Log In</a></li>
      </ul>
      
      <div class="tab-content">
        <div id="signup" data-aos="fade-zoom-in">   
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
              <input @keyup="inputStyle" @focus="inputStyle" @blur="inputStyle" type="email"required autocomplete="off"/>
            </div>
            
            <div class="field-wrap">
              <label>Set A Password<span class="req">*</span></label>
              <input @keyup="inputStyle" @focus="inputStyle" @blur="inputStyle" type="password"required autocomplete="off"/>
            </div>
            
            <button type="submit" class="button button-block">Get Started</button>
            <p class="home-forgot"><a href="/appventure/">Go home</a></p>
          </form>
        </div>
        
        <div id="login" class="hide" data-aos="fade">   
          <h1>Welcome Back!</h1>
          
          <form action="/" method="post">
          
            <div class="field-wrap">
              <label>Email Address<span class="req">*</span></label>
              <input @keyup="inputStyle" @focus="inputStyle" @blur="inputStyle" type="email"required autocomplete="off"/>
            </div>
          
            <div class="field-wrap">
              <label>Password<span class="req">*</span></label>
              <input @keyup="inputStyle" @focus="inputStyle" @blur="inputStyle" type="password"required autocomplete="off"/>
            </div>
                      
            <button class="button button-block">Log In</button>
            <p class="home-forgot"><a href="#">Forgot Password?</a></p>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer-component></footer-component>
</div>
</template>
<script>
  const titleText = {
    login: '¿Ya eres usario de appventure?, Conectate!',
    signup: '¿Todavia no te has dado de alta?, Registrate!'
  }

  import { FooterComponent } from '~/components/common'

  export default {
    data () {
      return {
        logo: require('~/assets/logo.svg'),
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
    },
    methods: {
      toggleLog (e) {
        var formActive = document.querySelectorAll('.tab-content > div')
        if (!e.currentTarget.classList.contains('active')) {
          e.currentTarget.parentNode.childNodes.forEach(function (element) { element.classList.toggle('active') })
          formActive.forEach(function (element) { element.classList.toggle('hide') })
        }
      },
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
      }
    },
    components: {
      FooterComponent
    }
  }
</script>
<style lang="scss" scoped>
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

  a {
    text-decoration: none;
    color: $dark-blue;
    transition: .5s ease;

    &:hover {
      color: $primary-blue;
    }
  }

  .logo {
    text-align: center;

    img {
      max-width: 5em;
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

  h1 {
    text-align: center;
    color: white;
    font-weight: 300;
    margin: 0 0 2em;
  }

  label {
    position: absolute;
    left: .5em;
    bottom: -.1em;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.25s ease;
    pointer-events: none;
    font-size: 1.4em;

    .req {
      margin: 2px;
      color: $dark-blue;
    }

    &.active {
      transform: translateY(-2em);
      left: .1em;
      font-size: 14px;

      .req {
        opacity: 0;
      }
    }

    &.highlight {
      color: white;
    }
  }

  input, textarea {
    font-size: 1.4em;
    width: 100%;
    height: 100%;
    padding: .4em .4em;
    background: none;
    background-image: none;
    border: 0;
    border-bottom: 1px solid $soft-grey !important;
    color: white;
    border-radius: 0;
    transition: border-color .25s ease, box-shadow .25s ease;

    &:focus {
      outline: 0;
      border-color: $dark-blue;
    }
  }

  textarea {
    border-bottom: 2px solid $soft-grey;
    resize: vertical;
  }

  .field-wrap {
    position: relative;
    margin-bottom: 2em;
  }

  .top-row:after {
    content: "";
    display: table;
    clear: both;
  }

  .top-row > div {
    float: left;
    width: 48%;
    margin-right: 4%;

    &:last-child {
      margin: 0;
    }
  }

  .button {
    border: 0;
    padding: .5em 0;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1em;
    background: $dark-blue;
    color: white;
    transition: all 0.5s ease;
  }

  .button:hover, .button:focus {
    background: $primary-blue;
  }

  .button-block {
    display: block;
    width: 100%;
  }

  .home-forgot {
    padding-top: 1em;
    margin: 0;
    text-align: right;
  }

  @media (min-width: 992px) {
    section {
      padding-top: 6em;
    }
  }
</style>
