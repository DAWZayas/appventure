<template>
  <div>
    <header-component></header-component>
    <div class="container-box">
      <div id="carousel" class="carousel slide" data-ride="carousel" v-touch="{ right: () => swipe('#prev'), left: () => swipe('#next') }">
        <div class="carousel-inner" role="listbox">
          <div v-for="(item, i) in items" :key="i" :class="item.class" class="carousel-item">
              <img class="d-block w-100 slider-img" :src="item.src" :alt="item.alt">
          </div>
          <a id="prev" class="carousel-control-prev" href="#carousel" role="button" data-slide="prev"></a>
          <a id="next" class="carousel-control-next" href="#carousel" role="button" data-slide="next"></a>
        </div>
      </div>
      <section class="main-data section-style">
        <h1>{{ tournament.strong }}</h1>
        <p><span class="icon-location"></span> {{ tournament.location }}</p>
        <p>Nivel: {{ tournament.level }}</p>
      </section>
      <section class="description p-1">
        <v-card color="white darken-2" class="black--text">
          <v-card-title primary-title>
            <div class="headline">Una pequeña descripción</div>
            <div>{{ tournament.description }}</div>
          </v-card-title>
        </v-card>
      </section>
      <section class="section-style">
        <h5>Información practica</h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48568.21108244509!2d-3.898194344274192!3d40.46391031592675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4184ecb204803f%3A0xcafdc908f78db4ef!2sMajadahonda%2C+Madrid!5e0!3m2!1ses!2ses!4v1512993521697" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        <h6>Transporte público</h6>
        <p>Autobuses 685, 651, 652, 653, 654</p>
        <h6>Hora de inicio del torneo</h6>
        <p>13:00</p>
        <h6>Hora de fin del torneo</h6>
        <p>Entre las 15:00 y las 16:00</p>
      </section>
      <br>
    </div>
  </div>
</template>
<script>
import { HeaderComponent } from '~/components/common'

export default {
  props: ['tournament'],
  data () {
    return {
      items: [
        {
          src: require('~/assets/images/torneos/torneo' + this.tournament.src + '.jpg'),
          class: 'active',
          alt: 'First'
        },
        {
          src: require('~/assets/images/torneos/torneo' + this.tournament.src + '.jpg'),
          alt: 'Second'
        },
        {
          src: require('~/assets/images/torneos/torneo' + this.tournament.src + '.jpg'),
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
  },
  components: {
    HeaderComponent
  }
}
</script>
<style lang="scss" scoped>
  p, h1, .container-box {
    margin: 0;
    padding: 0;
  }

  .container-box {
    max-width: 100%;
    background-color: #E8E8E8;
    
    * + * {
      margin-top: 0.60em
    }
  }

  .slider-img {
    margin-top: -2em;
  }

  #carousel {
    height: 25vh;
  }

  .section-style {
    background-color: #FFFFFF;
    padding: .25em;

    h5 {
      padding-top: .5em;
    }

    &.main-data {
      margin-top: 0;
      font-family: apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    }
  }

  .section-style {
    padding: 0 0.5em;
  }

  .practical-information {
    width: 90%;
  }

  iframe {
    margin: 0 auto;
    width: 100%;
    height: 20vh;
  }
</style>
