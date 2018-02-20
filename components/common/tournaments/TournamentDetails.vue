<template>
  <div v-if="tournament" class="neutral lighten-3">
    <v-carousel id="carousel" hide-delimiters hide-controls>
      <v-carousel-item v-for="(src,i) in tournament.imagesURL" :src="src" :key="i" class="m-0 p-0 carousel-image"></v-carousel-item>
    </v-carousel>

    <section class="mt-0 pa-2 white" style="position: relative;">
      <h1>{{ tournament.name }}</h1>
      <p><span class="icon-location"></span> {{ tournament.location.name }} - {{ tournament.location.locality }}</p>
      <p>Nivel: {{ tournament.level }}</p>

      <v-progress-circular
        style="position: absolute; left: calc( 100% - 75px ); top: calc( 50% - 25px );"
        :size="50"
        :width="5"
        :rotate="360"
        :value="gauging"
        :color="color"
      >
        {{ tournament.participants }}/{{ tournament.gauging }}
      </v-progress-circular>
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
      <GmapMap style="width: 100%; height: 300px;" :zoom="15" :center="tournament.location.position">
        <GmapMarker :position="tournament.location.position"/>
      </GmapMap>
      <h6>Transporte público</h6>
      <p>Autobuses 685, 651, 652, 653, 654</p>
      <h6>Hora de inicio del torneo</h6>
      <p>13:00</p>
      <h6>Hora de fin del torneo</h6>
      <p>Entre las 15:00 y las 16:00</p>
      <br>
    </section>
    
    <div id="alert">
      <v-alert
        :type="isParticipating ? 'success' : 'error'"
        :value="true"
        transition="scale-transition"
      >
        {{ isParticipating ? '¡ La inscripcion se ha realizado con exito !' : 'Te has desapuntado con éxito' }}
      </v-alert>
    </div>
    
    <div
      style="position: sticky; bottom: .5rem; width: calc( 100% - 1rem )"
      class="mx-2"
    >
      <v-btn
        block
        :disabled="!(gauging < 100) && !isParticipating"
        :color="!isParticipating ? 'info' : 'error'"
        @click.stop="isParticipating ? disTournament() : addTournament()"      
      >
        {{ isParticipating ? 'Desapuntarse': '¡ Unirse !' }}
      </v-btn>
    </div>
    {{isInDate}}
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import { format } from 'date-fns'

  export default {
    props: ['tournament', 'id'],
    computed: {
      ...mapGetters({participating: 'getParticipating'}),
      isParticipating () { return (this.id in this.participating) },
      color () { return ['error', 'warning', 'success'][Math.floor(this.gauging / 40)] },
      gauging () { return (this.tournament.participants / this.tournament.gauging) * 100 },
      isInDate () {
        var date = this.tournament.initDate.split('-')
        return new Date(date[2], date[1] - 1, date[0]) + '---' + format(new Date())
      }
    },
    methods: {
      addTournament () { this.addTournamentToUser({key: this.id, category: this.tournament.category}).then(this.displayAlert()) },
      disTournament () { this.disengageTournamentFromUser(this.id).then(this.displayAlert()) },
      displayAlert () {
        document.getElementById('alert').style.marginTop = 0
        setTimeout(function () {
          document.getElementById('alert').style.marginTop = '-6rem'
        }, 2500)
      },
      ...mapActions(['addTournamentToUser', 'disengageTournamentFromUser'])
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
