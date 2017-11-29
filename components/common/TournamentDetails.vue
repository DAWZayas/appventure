<template>
  <div>
    <div class="container-box">
      <div id="carousel" class="carousel slide" data-ride="carousel" v-touch="{ right: () => swipe('#prev'), left: () => swipe('#next') }">
        <div class="carousel-inner" role="listbox">
          <div v-for="(item, i) in items" :key="i" :class="item.class" class="carousel-item">
              <img class="d-block w-100 aaa" :src="item.src" :alt="item.alt">
          </div>
          <a id="prev" class="carousel-control-prev" href="#carousel" role="button" data-slide="prev"></a>
          <a id="next" class="carousel-control-next" href="#carousel" role="button" data-slide="next"></a>
        </div>
      </div>
      <section class="main-data section-style">
        <h1>{{ tournament.strong }}</h1>
        <p>{{ tournament.location }}</p>
      </section>
      <section class="description p-1">
        <v-card color="white darken-2" class="black--text">
          <v-card-title primary-title>
            <div class="headline">Una pequeña descripción</div>
            <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
          </v-card-title>
        </v-card>
      </section>
      <section class="section-style">
        <h6>Información practica</h6>
        

      </section>
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
<style lang="scss" scoped>
  * + * {
    margin-top: 0.60em
  }
  .container-box {
    max-width: 100%;
    padding: 0;
    background-color: #E8E8E8;
  }
  .aaa {
    margin-top: -2em;
  }
  #carousel {
    height: 25vh;
  }
  .section-style {
    background-color: #FFFFFF;
    padding: .25em;

    &.main-data {
      margin-top: 0;
    }
  }
  .practical-information {
    width: 90%;
  }
  p {
    margin: 0
  }
</style>
