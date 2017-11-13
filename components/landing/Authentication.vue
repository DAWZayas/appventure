<template>
<div>
  <section class="d-flex justify-content-center">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <div class="form">
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
            <p class="skip"><a href="/appventure/">Skip to home</a></p>
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
            <p class="skip"><a href="#">Forgot Password?</a></p>
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
<style scoped>
  .hide {
    display: none;
  }
  
  section {
    min-width: 25em;
    height: 100vh;
    background: rgba(19, 35, 47, 0.9);
  }

  a {
    text-decoration: none;
    color: #1ab188;
    -webkit-transition: .5s ease;
    transition: .5s ease;

    &:hover {
      color: #179b77;
    }
  }

  .form {
    width: 100%;
    padding: 1em;
    max-width: 600px;
  }

  .tab-group {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 2em;
  }

  .tab-group:after {
    content: "";
    display: table;
    clear: both;
  }

  .tab-group li a {
    display: block;
    text-decoration: none;
    padding: 15px;
    background: rgba(160, 179, 176, 0.25);
    color: #a0b3b0;
    font-size: 20px;
    float: left;
    width: 50%;
    text-align: center;
    cursor: pointer;
    transition: .5s ease;
  }

  .tab-group li a:hover {
    background: #179b77;
    color: #ffffff;
  }

  .tab-group .active a {
    background: #1ab188;
    color: #ffffff;
  }

  h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    margin: 0 0 40px;
  }

  label {
    position: absolute;
    transform: translateY(6px);
    left: 13px;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.25s ease;
    pointer-events: none;
    font-size: 22px;
  }

  label .req {
    margin: 2px;
    color: #1ab188;
  }

  label.active {
    transform: translateY(-1em);
    left: 2px;
    font-size: 14px;
  }

  label.active .req {
    opacity: 0;
  }

  label.highlight {
    color: #ffffff;
  }

  input, textarea {
    font-size: 22px;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 0;
    border-bottom: 1px solid #a0b3b0 !important;
    color: #ffffff;
    border-radius: 0;
    transition: border-color .25s ease, box-shadow .25s ease;
  }

  input:focus, textarea:focus {
    outline: 0;
    border-color: #1ab188;
  }

  textarea {
    border-bottom: 2px solid #a0b3b0;
    resize: vertical;
  }

  .field-wrap {
    position: relative;
    margin-bottom: 40px;
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
  }

  .top-row > div:last-child {
    margin: 0;
  }

  .button {
    border: 0;
    outline: none;
    border-radius: 0;
    padding: 15px 0;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1em;
    background: #1ab188;
    color: #ffffff;
    transition: all 0.5s ease;
  }
  .button:hover, .button:focus {
    background: #179b77;
  }

  .button-block {
    display: block;
    width: 100%;
  }

  .forgot {
    margin-top: -1em;
    text-align: right;
  }
  .skip {
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
