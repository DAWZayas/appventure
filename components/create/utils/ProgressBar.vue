<template>
  <v-progress-linear
    v-if="uploading"
    v-model="uploadProgress"
    :active="true"
    color="blue"
    background-color="blue-grey"
    class="m-0"
    style="position: absolute; bottom: 0;"
  ></v-progress-linear>
</template>
<script>
export default {
  props: ['uploading', 'uploadProgress']
}
</script>
