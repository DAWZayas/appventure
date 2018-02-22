<template>
  <v-dialog v-model="searchD" max-width="500px">
    <v-btn
      small
      fab
      color="primary"
      slot="activator"
    >
      <v-icon>search</v-icon>
    </v-btn>
    <v-card>
      <v-card-text>
        <v-text-field 
          color="primary" 
          v-model="searchText"
          placeholder=" Search..."
          hide-details
          autofocus
          :append-icon="'search'"
          @keyup.enter="search"
          :append-icon-cb="search"
        >
        </v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" flat @click.native="searchD = false">Cerrar</v-btn>
        <v-btn color="primary" flat @click.native="search" :disabled="searchFor === ''">Buscar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  import speakingurl from 'speakingurl'

  export default {
    methods: { search () { this.searchFor !== '' ? this.$router.push({ name: 'search', query: { q: this.searchFor } }) : null } },
    watch: { searchText () { this.searchFor = speakingurl(this.searchText) } },
    data () {
      return {
        searchD: false,
        searchText: '',
        searchFor: ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dialog__container {
    margin-top: -3rem!important;
    position: sticky!important;
    bottom: 0!important;
    left: 100%!important;
  }
</style>
