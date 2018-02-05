<template>
  <div class="neutral lighten-3">
    <v-carousel id="carousel" hide-delimiters hide-controls>
      <v-carousel-item v-for="(src,i) in tournament.imagesURL" :src="src" :key="i" class="m-0 p-0 carousel-image"></v-carousel-item>
    </v-carousel>

    <section class="mt-0 pa-2 white">
      <h1>{{ tournament.name }}</h1>
      <p><span class="icon-location"></span> {{ tournament.location.name }} - {{ tournament.location.locality }}</p>
      <p>Nivel: {{ tournament.level }}</p>
    </section>

    <v-card color="white darken-2 ma-2" class="black--text square">
      <v-card-title primary-title>
        <div class="headline">Una pequeña descripción</div>
      </v-card-title>
      <v-card-text>
        <div class="grey--text">{{ tournament.description }}</div>
      </v-card-text>
    </v-card>

    <section class="pa-2 white">
      <h5 class="pl-0 pb-2">Información practica</h5>
      <GmapMap style="width: 100%; height: 300px;" :zoom="12" :center="tournament.location.position">
        <GmapMarker :position="tournament.location.position"/>
      </GmapMap>
      <h6>Transporte público</h6>
      <p>Autobuses 685, 651, 652, 653, 654</p>
      <h6>Hora de inicio del torneo</h6>
      <p>13:00</p>
      <h6>Hora de fin del torneo</h6>
      <p>Entre las 15:00 y las 16:00</p>
      <br>
      <v-btn :color="isParticipating ? 'secondary' : 'info'" @click="addTournamentToUser">{{ isParticipating ? 'Desapuntarse' : '¡ Apuntarte !' }}</v-btn>
    </section>

    <div id="alert">
      <v-alert
        type="success"
        :value="true"
        transition="scale-transition"
      >
        ¡ La inscripcion se ha realizado con exito !
      </v-alert>
    </div>
  </div>
</template>
<script>

import {mapGetters} from 'vuex'
import firebaseApp from '~/firebaseapp'

export default {
  props: ['tournament', 'id'],
  data () {
    return {
      isParticipating: false
    }
  },
  computed: {
    ...mapGetters({user: 'getUser'})
  },
  methods: {
    addTournamentToUser () {
      let db = firebaseApp.database()
      let addTournamentRef = db.ref(`/users/` + this.user.uid + `/participating`)
      addTournamentRef.child(this.$route.params.id).set('')
      this.isParticipating = true
    }
  },
  watch: {
    isParticipating: function () {
      document.getElementById('alert').style.marginTop = 0
      setTimeout(function () {
        document.getElementById('alert').style.marginTop = '-6rem'
      }, 2500)
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
  iframe {
    margin: 0 auto;
    width: 100%;
    height: 20vh;
  }
  #alert {
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    margin-top: -6rem;
    transition: margin-top 1s ease-out;
    z-index: 1000;
  }
  .square {
    border-radius: 0!important;
    box-shadow: none!important;
  }
</style>
