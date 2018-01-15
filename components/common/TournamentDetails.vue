<template>
  <div class="blue-grey lighten-3">
    <v-carousel id="carousel" hide-delimiters hide-controls>
      <v-carousel-item v-for="(src,i) in tournament.imagesURL" :src="src" :key="i" class="ma-0"></v-carousel-item>
    </v-carousel>

    <section class="mt-0 pa-2 white">
      <h1>{{ tournament.name }}</h1>
      <p><span class="icon-location"></span> {{ tournament.location }}</p>
      <p>Nivel: {{ tournament.level }}</p>
    </section>

    <v-card color="white darken-2 ma-2" class="black--text">
      <v-card-title primary-title>
        <div class="headline">Una pequeña descripción</div>
        <div>{{ tournament.description }}</div>
      </v-card-title>
    </v-card>

    <section class="pa-2 white">
      <h5 class="pl-0 pb-2">Información practica</h5>
      <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48568.21108244509!2d-3.898194344274192!3d40.46391031592675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4184ecb204803f%3A0xcafdc908f78db4ef!2sMajadahonda%2C+Madrid!5e0!3m2!1ses!2ses!4v1512993521697"></iframe>
      <h6>Transporte público</h6>
      <p>Autobuses 685, 651, 652, 653, 654</p>
      <h6>Hora de inicio del torneo</h6>
      <p>13:00</p>
      <h6>Hora de fin del torneo</h6>
      <p>Entre las 15:00 y las 16:00</p>
      <br>
      <v-btn color="info" @click="addTournamentToUser">¡ Apuntarte !</v-btn>
    </section>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
// import firebaseApp from '~/firebaseapp'

export default {
  props: ['tournament'],
  computed: {
    ...mapGetters({user: 'getUser'})
  },
  methods: {
    addTournamentToUser () {
      // let db = firebaseApp.database()
      // let addTournamentRef = db.ref(`/users/participating`)
      console.log(this.$route.params.id)
      // addTournamentRef.child(this.tournament).set('')
    }
  }
}
</script>
<style lang="scss" scoped>
  p, h1 {
    margin: 0;
    padding: 0;
  }
  h6 {
    margin: 1rem 0 0;
  }
  #carousel {
    height: 25vh;

    .carousel__item {
      background-position-y: 0!important;
    }
  }
  iframe {
    margin: 0 auto;
    width: 100%;
    height: 20vh;
  }
</style>
