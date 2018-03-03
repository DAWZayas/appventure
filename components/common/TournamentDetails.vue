<template>
  <div v-if="tournament" class="neutral lighten-3">
    <v-carousel id="carousel" hide-delimiters hide-controls>
      <v-carousel-item v-for="(src,i) in tournament.imagesURL" :src="src" :key="i" class="m-0 p-0 carousel-image"></v-carousel-item>
    </v-carousel>

    <v-card class="mt-0 pa-2 square" style="position: relative;">
      <h1>{{ tournament.name }}</h1>
      <p><span class="icon-location"></span> {{ tournament.location.name }} - {{ tournament.location.locality }}</p>
      <p>Nivel: {{ tournament.level }}</p>
    </v-card>

    <v-card color="darken-2 ma-2" class="square">
      <v-card-text>
        <div class="grey--text" style="text-align: justify;">{{ tournament.description }}</div>
      </v-card-text>
      <v-card-text class="py-0" v-if="outIns">
        <div>Participantes: {{ tournament.participants }}/{{ tournament.gauging }}</div>
        <v-progress-linear
          class="mt-0"
          :value="gauging"
          :color="color"
        >
        </v-progress-linear>
      </v-card-text>
    </v-card>

    <v-card class="pa-2 square">
      <h5 class="pl-0 pb-2 grey--text">Información practica</h5>
      <GmapMap style="width: 100%; height: 300px;" :zoom="15" :center="tournament.location.position">
        <GmapMarker :position="tournament.location.position"/>
      </GmapMap>
      <h6>Precio de la inscripción</h6>
      <p>{{ tournament.prize }} € </p> 
      <h6>Fecha de inicio del torneo</h6>
      <p>{{ tournament.initDate }}</p>
      <h6>Fecha de fin del torneo</h6>
      <p>{{ tournament.finishDate }}</p>
    </v-card>

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
      style="position: sticky; bottom: .5rem; width: calc( 100% - 1.2rem ); margin: 0 .6rem"
      v-if="!outIns"
    >
      <v-btn
        v-if="!outFinish" block depressed nuxt
        color="secondary"
        :to="{ name: 'results', params: { date: slugDate, slug: slugName } }"
      >
        Ver resultado
      </v-btn>
      <v-btn v-else block :ripple="false" style="pointer-events: none;" class="no-shadow" color="error">Inscripción cerrada</v-btn>
    </div>

    <div
      style="position: sticky; bottom: .5rem; width: calc( 100% - 1rem )"
      class="mx-2 d-flex"
      v-else
    >
      <v-btn
        block
        :disabled="((!(gauging < 100) && !isParticipating) || !isAuthenticated)"
        :color="!isParticipating ? 'info' : 'error'"
        depressed
        @click.stop="isParticipating ? disTournament() : tournament.type === 'individual' ? addTournament() : dialog2 = true"      
      >
        {{ isParticipating ? 'Desapuntarse': '¡ Unirse !' }}
      </v-btn>
      <share-button v-if="tournament" :name="tournament.name"></share-button>
      <v-dialog v-model="dialog2" max-width="500px">
        <v-card class="p-1">
          <h5>Nombre de integrantes del equipo</h5>
          <v-flex xs12 sm6 v-for="participante in labels" :key="participante">
            <v-text-field box v-model="p[participante]" :label="participante"></v-text-field>
          </v-flex>
          <v-btn 
            color="info"
            :disabled="!(p['Capitán'] !== '' && p['2º participante'] !== '' && p['3º participante'] !== ''  && p['4º participante'] !== ''  && p['5º participante'] !== '' && p['Nombre del equipo'] !== '')"
            @click="(addTournament(), dialog2 = false)"
          >
          ¡ Unirse !
          </v-btn>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import { ShareButton } from '~/components/layoutComponents'
  import { isOutDateD } from '~/utils/utils'
  import speakingurl from 'speakingurl'

  export default {
    props: ['tournament', 'id'],
    components: { ShareButton },
    computed: {
      ...mapGetters({participating: 'getParticipating', isAuthenticated: 'isAuthenticated'}),
      isParticipating () { return (this.id in this.participating) },
      color () { return ['error', 'warning', 'success'][Math.floor(this.gauging / 40)] },
      gauging () { return (this.tournament.participants / this.tournament.gauging) * 100 },
      outIns () { return isOutDateD(this.tournament.initDate) },
      outFinish () { return isOutDateD(this.tournament.finishDate) },
      slugDate () { return speakingurl(this.tournament.createDate) },
      slugName () { return speakingurl(this.tournament.name) }
    },
    methods: {
      addTournament () {
        this.addDissTournament(
          {
            key: this.id,
            category: this.tournament.category,
            number: 1,
            option: true,
            info: this.tournament.type === 'individual' ? false : this.p
          }
        ).then(this.displayAlert())
      },
      disTournament () { this.addDissTournament({key: this.id, category: null, number: -1, option: false}).then(this.displayAlert()) },
      displayAlert () {
        document.getElementById('alert').style.marginTop = 0
        setTimeout(function () {
          document.getElementById('alert').style.marginTop = '-6rem'
        }, 2500)
      },
      ...mapActions(['addDissTournament'])
    },
    head () {
      return {
        title: this.tournament ? this.tournament.name : 'AppVenture',
        meta: [ { hid: 'description', name: 'description', content: this.tournament ? this.tournament.description : 'Un gran torneo' } ]
      }
    },
    data () {
      return {
        dialog2: false,
        labels: ['Nombre del equipo', 'Capitán', '2º participante', '3º participante', '4º participante', '5º participante'],
        p: {
          'Nombre del equipo': '',
          'Capitán': '',
          '2º participante': '',
          '3º participante': '',
          '4º participante': '',
          '5º participante': ''
        }
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
</style>
