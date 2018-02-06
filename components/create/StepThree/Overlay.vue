<template>
  <div class="complete-overlay" v-if="uploadProgress[index] === 100">
    <i class="material-icons">done</i>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: ['index'],
  computed: { ...mapGetters({uploadProgress: 'getProgress'}) }
}
</script>

<style lang="scss" scoped>
  .complete-overlay {
    background-color: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    i {
      color: #8bc34a;
      font-size: 4rem;
      position: absolute;
      top: calc( 50% - 2rem );
      left: calc( 50% - 2rem );
    }
  }
</style>
