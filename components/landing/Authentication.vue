<template>
  <section>
    <div class="container d-flex align-items-center">
      <div class="row flex-center pt-5">
        <div class="col-lg-6 text-center text-lg-left mb-5">
          <div class="white-text">
            <h1>AppVenture</h1>
            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste.</h6>
            <nuxt-link class="btn btn-primary" to="appventure"> Iniciar sin usuario </nuxt-link>
          </div>
        </div>
                  
        <div class="col-md-6 col-xl-5 offset-xl-1">
          <ul class="nav nav-tabs tabs-2 light-blue darken-3" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#login" role="tab"><i class="fa fa-user mr-1"></i> Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#register" role="tab"><i class="fa fa-user-plus mr-1"></i> Register</a>
            </li>
          </ul>
          
          <div id="login" class="card wow tab-pane fade in show active" data-wow-delay="0.3s" role="tabpanel">
            <div class="card-body z-depth-2">
              <div class="text-center">
                <div>{{ this.titleText }}</div>
              </div>        
              <br>   
              <div class="d-flex align-items-center">
                <i class="fa fa-user prefix grey-text"></i>
                <input  v-model="email" type="email" id="form3" class="form-control" placeholder="E-mail">
              </div>
              <br>
              <div class="d-flex align-items-center">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input v-model="password" type="password" id="form2" class="form-control" placeholder="Contraseña">
              </div>
              <br>
              <div v-show="this.authError !== ''">
                <button type="button">
                  <span aria-hidden="true">&times;</span>
                </button>
                <strong> </strong>{{ this.errorText }}
              </div>  
              <div class="text-center">
                <button class="btn peach-gradient">Entrar</button>
              </div>
            </div>
          </div>

          <div id="register" class="card wow tab-pane fade" data-wow-delay="0.3s" role="tabpanel">
            <div class="card-body z-depth-2">
              <div class="text-center">
                <div>¿Todavia no te has dado de alta? ¡Regístrate!</div>
              </div>        
              <br>  
              <div class="d-flex align-items-center">
                <i class="fa fa-user prefix grey-text"></i>
                <input  type="text" id="form3" class="form-control" placeholder="Nombre">
              </div> 
              <br>
              <div class="d-flex align-items-center">
                <i class="fa fa-user prefix grey-text"></i>
                <input  v-model="email" type="email" id="form3" class="form-control" placeholder="E-mail">
              </div>
              <br>
              <div class="d-flex align-items-center">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input v-model="password" type="password" id="form2" class="form-control" placeholder="Contraseña">
              </div>
              <br>
              <div v-show="this.authError !== ''">
                <button type="button">
                  <span aria-hidden="true">&times;</span>
                </button>
                <strong> </strong>{{ this.errorText }}
              </div>  
              <div class="text-center">
                <button class="btn peach-gradient">Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
<style scoped>
  section {
    background: url("https://i.pinimg.com/originals/29/62/cc/2962ccc1e3818bbfdd6cb6aafd32dc8d.jpg") no-repeat center center;
    background-size: cover;
  }
  #register {
    position: relative;
    bottom: 42%;
  }
  h6 {
      line-height: 1.7;
  }

  @media (max-width: 992px) {
      .full-height,
      .full-height body,
      .full-height header,
      .full-height header .view {
          height: 100%; 
      } 
  }      
</style>
