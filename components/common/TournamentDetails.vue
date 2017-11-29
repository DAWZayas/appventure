<template>
<div>
  <div id="carousel" class="carousel slide" data-ride="carousel" v-touch="{ right: () => swipe('#prev'), left: () => swipe('#next') }">
    <div class="carousel-inner" role="listbox">
      <div v-for="(item, i) in items" :key="i" :class="item.class" class="carousel-item">
          <img class="d-block w-100 aaa" :src="item.src" :alt="item.alt">
      </div>
      <a id="prev" class="carousel-control-prev" href="#carousel" role="button" data-slide="prev"></a>
      <a id="next" class="carousel-control-next" href="#carousel" role="button" data-slide="next"></a>
    </div>
  </div>
  <div class="main-data">
    <h1>{{ tournament.strong }}</h1>
    <p>{{ tournament.location }}</p>
  </div>
</div>
</template>
<script>
export default {
  props: ['tournament'],
  data () {
    return {
      items: [
        {
          src: require('~/assets/images/torneos/torneopoker.jpg'),
          class: 'active',
          alt: 'First'
        },
        {
          src: require('~/assets/images/torneos/torneopoker.jpg'),
          alt: 'Second'
        },
        {
          src: require('~/assets/images/torneos/torneopoker.jpg'),
          alt: 'Third'
        }
      ]
    }
  },
  methods: {
    swipe (direction) {
      var event = new MouseEvent('click', { bubbles: true })
      document.querySelector(direction).dispatchEvent(event)
    }
  }
}
</script>
<style scoped>
  .aaa {
    margin-top: -2em;
  }
  #carousel {
    height: 25vh;
  }
  .main-data {
    margin-top: 0.25em;
  }
  .practical-information {
    width: 90%;
  }
</style>
