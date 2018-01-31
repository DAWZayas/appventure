<template>
  <v-card class="p-2 square">
    Tema en negro:
    <v-switch
      @click="changeTheme"
      v-model="isDark"
      :color="isDark === true ? 'red accent-1' : ''"
      hide-details
    ></v-switch>
  </v-card>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({ isDark: 'getDarkTheme' })
    },
    methods: {
      changeTheme () {
        this.setDarkTheme(!this.isDark)
      },
      ...mapActions(['setDarkTheme'])
    }
  }
</script>
