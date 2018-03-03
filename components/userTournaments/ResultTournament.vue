<template>
  <div v-if="tournament">
    <h5>Resultados de {{tournament.name}}</h5>
    <div class="m-2 p-1">
      <div class="podium d-flex align-items-end">
        <div class="kk d-flex flex-column justify-content-between p-1">
          <div class="second m-auto p-3">
            <v-avatar size="50px">
              <img :src="users[suffleParticipants[1]].photoURL" alt="avatar">
            </v-avatar>
          </div>
          <div class="d-flex flex-column align-items-center" style="background-color: #e6b800; border: 1px solid #000">
            <span>2º {{tournament.type !== 'individual'? tournament.userParticipants[suffleParticipants[1]]['Nombre del equipo'] : tournament.userParticipants[suffleParticipants[1]]}}</span>
          </div>
        </div>
        <div class="kk d-flex flex-column justify-content-between p-1">
          <div class="first m-auto p-3">
            <v-avatar size="50px">
              <img :src="users[suffleParticipants[0]].photoURL" alt="avatar">
            </v-avatar>
          </div>
          <div class="d-flex flex-column align-items-center" style="background-color: #cca300; border: 1px solid #000 ">
            <span class="first-span">1º {{tournament.type !== 'individual'? tournament.userParticipants[suffleParticipants[0]]['Nombre del equipo'] : tournament.userParticipants[suffleParticipants[0]]}}</span>
          </div>
        </div>
        <div class="kk d-flex flex-column justify-content-between p-1">
          <div  class="third m-auto p-3">
            <v-avatar size="50px">
              <img :src="users[suffleParticipants[2]].photoURL" alt="avatar">
            </v-avatar>
          </div>
          <div class="d-flex flex-column align-items-center" style="background-color: #e6b800; border: 1px solid #000">             
            <span>3º {{tournament.type !== 'individual'? tournament.userParticipants[suffleParticipants[2]]['Nombre del equipo'] : tournament.userParticipants[suffleParticipants[2]]}}</span>
          </div>
        </div>
      </div>
      <h5>Clasificación completa</h5>
      <div class="m-2 p-1">
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
    }
  }
</script>
<style lang="scss" scoped>
  .podium {
    height: 200px!important;
    background-color: #f5f5f5;
    margin: auto;
    position: relative;
  }
  .first {
    height: 5%!important;
  }
  .first-span {
    bottom: 3em;
  }
  .second {
    height: 25%!important;
  }
  .third {
    height: 35%!important;
  }
  .kk {
    height: 100%;
  }
  span {
    position: absolute;
    bottom: 2em;
  }
</style>

