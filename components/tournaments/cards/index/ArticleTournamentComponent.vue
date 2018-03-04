<template>
<div>
  <article class="tournament">
    <div>
      <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName } }">
        <div class="tournament-img p-0"><img style="width: 100%; overflow:hidden;" v-img="src"></div>
      </nuxt-link>
    </div>
    <strong class="tournament-strong t-overflow">{{ tournament.name }}</strong>
    <p class="tournament-text t-overflow"><v-icon>fa-globe</v-icon> {{ tournament.location.locality }}</p>
    <p class="tournament-text"><v-icon>fa-gears</v-icon> {{ tournament.level }}</p>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" width="600px">
        <button class="see-more" color="primary" dark slot="activator">...</button>
        <v-card>
        <v-card-title class="pt-3 pb-2">
          <span class="headline">{{ tournament.name }}</span>
        </v-card-title>
        <v-alert color="error" icon="warning" class="m-0 mx-3 py-1" :value="outIns">
          ¡ Este torneo ya ha comenzado !
        </v-alert>      
        <v-card-text class="pt-2">
          <p>En este torneo podras ganar las siguientes insignias</p>
          <v-chip color="indigo" text-color="white" small>
            <v-avatar class="mr-0">
              <v-icon>star</v-icon>
            </v-avatar>
            Nivel {{tournament.level}} en {{ins[tournament.subCategory]}}
          </v-chip>
          <div class="mt-4">
            <p>Datos del torneo: </p>
            <p class="tournament-text"><v-icon>location_city</v-icon> {{ tournament.location.locality }}</p>
            <p class="tournament-text"><v-icon>swap_vert</v-icon> {{ tournament.level }}</p>
            <p class="tournament-text"><v-icon>date_range</v-icon> {{ tournament.initDate }}</p>
            <p class="tournament-text"><v-icon>euro_symbol</v-icon> {{ tournament.prize }}</p>
          </div>
        </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" flat @click="dialog = false">Cerrar</v-btn>
            <nuxt-link :to="{ name: 'tournaments', params: { date: slugDate, slug: slugName } }">
              <v-btn color="primary" flat @click="dialog = false">Ver más</v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </article>
</div>
</template>
<script>
  import speakingurl from 'speakingurl'
  import { isOutDateD } from '~/utils/utils'

  export default {
    props: ['tournament'],
    computed: {
      outIns () { return !isOutDateD(this.tournament.initDate) }
    },
    data () {
      return {
        src: this.tournament.imagesURL[this.tournament.defaultImg],
        slugDate: speakingurl(this.tournament.createDate),
        slugName: speakingurl(this.tournament.name),
        dialog: false,
        ins: {
          'football': 'Fútbol',
          'padel': 'Padel',
          'basketball': 'Baloncesto',
          'golf': 'Golf',
          'poker': 'Poker',
          'karts': 'Karts',
          'rally': 'Rally',
          'motos': 'Motos',
          'lol-esport': 'League of Legends',
          'csgo': 'CSGO',
          'dota2': 'Dota 2',
          'fifa-esport': 'FIFA'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tournament {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.20em;
    border-bottom-right-radius: 0;
    width: 10em;
    height: 11em;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    position: relative;
    margin: 1em;
  }

  .tournament-strong {
    background-color: #00BCD4;
    color: #FFFFFF;
    border-bottom: 1px solid #BDBDBD;
    padding: .2em;
  }

  .tournament-text {
    color: #757575;
    padding: .1em .5em;
    margin: 0;
  }

  .t-overflow {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 10rem;
  }

  .tournament-img {
    width: 10rem!important;
    height: ( 10rem / (16/9) )!important;
  }

  .see-more {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    cursor: pointer;
    background-color: #8BC34A;
    border-top-left-radius: 20%;
    transition: background-color .2s;
    padding: 0 .5em;
    margin: 0;
    
    &:hover { background-color: rgba(139, 195, 74, .8); }
  }
</style>
