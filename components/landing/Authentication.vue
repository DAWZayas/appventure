<template>
<div>
  <section class="d-flex justify-content-center">
    <div class="form">
      <div class="logo">
        <img :src="logo" alt="AppVenture" class="my-4">
      </div>
      <ul class="tab-group" ref="tabs">
        <li class="tab active" @click.prevent="toggleLog"><a href="#signup">Sign Up</a></li>
        <li class="tab" @click.prevent="toggleLog"><a href="#login">Log In</a></li>
      </ul>

      <div class="tab-content">
        <transition name="fade" mode="out-in">
          <sign-up-component v-if="this.isSignUp" key="signup"></sign-up-component>
          <log-in-component v-else key="login"></log-in-component>
        </transition>
      </div>
    </div>
  </section>
</div>
</template>
<script>
  import { LogInComponent, SignUpComponent } from '~/components/landing'

  export default {
    components: {
      LogInComponent,
      SignUpComponent
    },
    data () {
      return {
        logo: require('~/assets/logo.svg'),
        isSignUp: true
      }
    },
    methods: {
      toggleLog (ev) {
        ev.stopPropagation()
        if (!ev.currentTarget.classList.contains('active')) {
          this.$refs.tabs.childNodes.forEach(function (element) { element.classList.toggle('active') })
          this.isSignUp = !this.isSignUp
        }
      }
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

  h1 {
    text-align: center;
    color: white;
    font-weight: 300;
    margin: 0 0 2em;
  }

  @media (min-width: 992px) {
    section {
      padding-top: 6em;
    }
  }
</style>
