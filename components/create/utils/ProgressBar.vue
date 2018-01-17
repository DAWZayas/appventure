<template>
  <v-progress-linear
    v-model="uploadProgress[index]"
    :active="true"
    color="blue"
    background-color="blue-grey"
    class="m-0"
    style="position: absolute; bottom: 0;"
  ></v-progress-linear>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: ['index'],
  computed: { ...mapGetters({uploadProgress: 'getProgress'}) }
}
</script>
