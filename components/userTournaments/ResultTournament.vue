<template>
  <div v-if="tournament">
    <div class="m-2">
      <div class="podium d-flex align-items-end">
        <div class="kk d-flex flex-column justify-content-between">
          <div class="second"></div>
          <div style="background-color: red">2º</div>
        </div>
        <div class="kk d-flex flex-column justify-content-between">
          <div class="first">asd</div>
          <div style="background-color: blue">1º</div>
        </div>
        <div class="kk d-flex flex-column justify-content-between">
          <div  class="third">asd</div>
          <div style="background-color: green"> 3º </div>
        </div>
      </div>
      {{ participants }}
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
      participants () {
        let xs = Object.keys(this.tournament.userParticipants)
        return _.shuffle(xs)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .podium {
    height: 150px!important;
    background-color: brown;
  }
  .first {
    height: 5%!important;
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
</style>

