<template>
  <div v-if="tournament">
    <div class="d-flex align-items-center m-2">
      <h5 class="p-0">Resultados de {{tournament.name}}</h5>
      <v-tooltip bottom class="grow" style="opacity: 1; position: relative;" :value="load">
        <v-icon slot="activator" @click="link">info</v-icon>
        <span>+ INFO</span>
      </v-tooltip>
    </div>

    <div class="podium d-flex align-items-end m-2">
      <div class="kk d-flex flex-column justify-content-between p-1">
        <div class="second m-auto p-3">
          <v-avatar size="50px">
            <img :src="users[suffleParticipants[1]].photoURL" alt="avatar">
          </v-avatar>
        </div>
        <div class="d-flex flex-column align-items-center" style="background-color: #e6b800; border: 1px solid #000">
          <span class="winners">2º {{tournament.type !== 'individual'? tournament.userParticipants[suffleParticipants[1]]['Nombre del equipo'] : tournament.userParticipants[suffleParticipants[1]]}}</span>
        </div>
      </div>

      <div class="kk d-flex flex-column justify-content-between p-1">
        <div class="first m-auto p-3">
          <v-avatar size="50px">
            <img :src="users[suffleParticipants[0]].photoURL" alt="avatar">
          </v-avatar>
        </div>
        <div class="d-flex flex-column align-items-center" style="background-color: #cca300; border: 1px solid #000 ">
          <span class="first-span winners">1º {{tournament.type !== 'individual'? tournament.userParticipants[suffleParticipants[0]]['Nombre del equipo'] : tournament.userParticipants[suffleParticipants[0]]}}</span>
        </div>
      </div>

      <div class="kk d-flex flex-column justify-content-between p-1">
        <div  class="third m-auto p-3">
          <v-avatar size="50px">
            <img :src="users[suffleParticipants[2]].photoURL" alt="avatar">
          </v-avatar>
        </div>
        <div class="d-flex flex-column align-items-center" style="background-color: #e6b800; border: 1px solid #000">             
          <span class="winners">3º {{tournament.type !== 'individual'? tournament.userParticipants[suffleParticipants[2]]['Nombre del equipo'] : tournament.userParticipants[suffleParticipants[2]]}}</span>
        </div>
      </div>
    </div>

    <h5 class="pl-2">Clasificación completa</h5>
    <div class="m-2">
      <v-expansion-panel focusable>
        <v-expansion-panel-content v-for="(participant, index) in suffleParticipants" :key="participant">
          <div slot="header">{{index + 1}}º {{tournament.type !== 'individual'? tournament.userParticipants[participant]['Nombre del equipo'] : tournament.userParticipants[participant]}}</div>
          <v-card>
            <v-card-text v-if="tournament.type !== 'individual'" class="grey lighten-3">
              <p>Capitán: {{tournament.userParticipants[participant]['Capitán']}}</p>
              <p>2º participante: {{tournament.userParticipants[participant]['2º participante']}}</p>
              <p>3º participante: {{tournament.userParticipants[participant]['3º participante']}}</p>
              <p>4º participante: {{tournament.userParticipants[participant]['4º participante']}}</p>
              <p>5º participante: {{tournament.userParticipants[participant]['5º participante']}}</p>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import _ from 'lodash'

  export default {
    props: ['tournament'],
    computed: {
      ...mapGetters({ users: 'getUsers' }),
      suffleParticipants () {
        let xs = Object.keys(this.tournament.userParticipants)
        return _.shuffle(xs)
      }
    },
    methods: {
      link () {
        this.$router.push({ name: 'tournaments', params: { date: this.$route.params.date, slug: this.$route.params.slug } })
      }
    },
    mounted: function () {
      this.load = true
      setTimeout(() => { this.load = false }, 2000)
    },
    data: () => { return { load: false } }
  }
</script>
<style lang="scss" scoped>
  .podium {
    height: 200px!important;
    background-color: #f5f5f5;
    margin: auto;
    position: relative;

    & div .first {
      height: 5%!important;    
    }

    & div .second {
      height: 25%!important;
    }

    & div .third {
      height: 35%!important;
    }
  }

  .kk {
    height: 100%;
  }

  .winners {
    position: absolute;
    bottom: 2em;
  }

  .first-span {
    bottom: 3em;
  }

  .grow {
    flex-grow: 0!important;
  }
</style>

