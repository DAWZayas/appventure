<template>
  <v-card class="p-2 py-5 mt-2 square">
    <div class="d-flex" >
      <div>
        Logros: <br>
        <v-chip color="orange" text-color="white" class="ml-0" small>
          <v-icon left>{{ type === 'Venture' ? 'person' : 'build' }}</v-icon>
          {{ type }}
        </v-chip> <br>
        <v-chip color="indigo" text-color="white" class="ml-0" small>
          <v-avatar>
            <v-icon>star</v-icon>
          </v-avatar>
          Maestro en csgo
        </v-chip>
      </div>
    </div>
  </v-card>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: { ...mapGetters({ type: 'getUserType' }) }
  }
</script>
