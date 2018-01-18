<template>
  <div v-if="isAuthenticated && isMobile" class="avatar-menu d-flex align-items-center" :style="{'background-color': color}">
    <div>
      <v-avatar
        v-show="isAuthenticated && isMobile"
        :size="'60px'"
        class="grey lighten-4"
      >
        <img :src="userPhoto" alt="avatar">
      </v-avatar>
    </div>
    <div>
      {{this.displayName}} <br>
      <v-chip color="orange" text-color="white" class="ml-0" small>
        <v-avatar>
          <v-icon>build</v-icon>
        </v-avatar>
        Administrador
      </v-chip> <br>
      <v-chip color="indigo" text-color="white" class="ml-0" small>
        <v-avatar>
          <v-icon>star</v-icon>
        </v-avatar>
        Maestro en csgo
      </v-chip>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['isAuthenticated', 'isMobile'],
    computed: { ...mapGetters({ displayName: 'getDisplayName', userPhoto: 'getUserPhoto' }) },
    data () {
      return {
        color: this.$vuetify.theme.neutral
      }
    }
  }
</script>
