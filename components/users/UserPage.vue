<template>
  <v-flex p-2>
    <v-card class="p-2 mb-1 square">
      <h3>Mis Datos</h3>
    </v-card>
    <user-card></user-card>
    <achievments></achievments>
    <br>
    <user-data></user-data>
    <br>
    <dark-selector></dark-selector>
    <create></create>
  </v-flex>
</template>
<script>
  import { UserCard, Achievments, UserData, DarkSelector, Create } from '~/components/users/userComponents'

  export default {
    components: {
      UserCard,
      Achievments,
      UserData,
      DarkSelector,
      Create
    }
  }
</script>
