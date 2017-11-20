<template>
  <v-app v-if="isCreator" class="container">
    <v-flex xs12 sm4>
      <div>
        <v-carousel delimiter-icon="stop">
          <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
        <strong>Crack</strong>
        <p>Majadahonda</p>
      </div>
    </v-flex>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          src: '/static/doc-images/carousel/squirrel.jpg'
        },
        {
          src: '/static/doc-images/carousel/sky.jpg'
        },
        {
          src: '/static/doc-images/carousel/bird.jpg'
        },
        {
          src: '/static/doc-images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>
