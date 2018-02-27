<template>
  <div class="avatar-menu d-flex align-items-center" :class="!isMobile ? 'flex-column p-0 pt-4' : ''">
    <div>
      <v-avatar
        :size="isMobile ? '60px' : '120px'"
        class="grey lighten-4"
      >
        <img :src="userPhoto" alt="avatar">
      </v-avatar>
    </div>
    <div class="d-flex flex-column" :class="isMobile ? 'pl-4' : 'align-items-center'" style="width: 100%;">
      <div :class="isMobile ? '' : 'name'">{{ displayName }}</div>
      <div :class="isMobile ? '' : 'd-flex flex-column'">
        <v-chip color="orange" text-color="white" class="ml-0" small>
          <v-avatar>
            <v-icon>{{ type === 'Venture' ? 'person' : 'build' }}</v-icon>
          </v-avatar>
          {{ type }}
        </v-chip>
        <v-chip color="indigo" text-color="white" class="ml-0" small>
          <v-avatar>
            <v-icon>star</v-icon>
          </v-avatar>
          Maestro en CSGO
        </v-chip>
        <v-chip color="green darken-1" text-color="white" class="ml-0" small>
          <v-avatar>
            <v-icon>golf_course</v-icon>
          </v-avatar>
          Veterano golfista
        </v-chip>
      </div>
    </div>
    <v-divider v-if="!isMobile" class="mb-0"></v-divider>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['isMobile'],
    computed: { ...mapGetters({ displayName: 'getDisplayName', userPhoto: 'getUserPhoto', type: 'getUserType' }) },
    data () {
      return {
        color: this.$vuetify.theme.neutral
      }
    }
  }
</script>
<style lang="scss" scoped>
  .name {
    font-size: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>
