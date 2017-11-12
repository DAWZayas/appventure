  <template>
    <div class="row">
      <hr>
      <tag-related-component v-for="sport in sports" :key="sport.key" :sport="sport"></tag-related-component>
    </div>
  </template>
<script>
  import TagRelatedComponent from '~/components/common/TagRelatedComponent'

  export default {
    data () {
      return {
        sports: [
          {
            sport: 'Parapente',
            src: require('~/assets/images/sports/parapente.jpg'),
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: require('~/assets/images/sports/parapente.jpg'),
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: require('~/assets/images/sports/parapente.jpg'),
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          },
          {
            sport: 'Parapente',
            src: require('~/assets/images/sports/parapente.jpg'),
            location: 'Madrid',
            highlight: '¡Apúntate a volar!',
            announcer: 'eXperience',
            date: '15/11/2017',
            description: 'Disfruta de una experiencia única saltando en parapente en la sierra de Madrid. Desde 24.99€.'
          }
        ]
      }
    },
    components: {
      'tag-related-component': TagRelatedComponent
    }
  }
</script>
<style scoped>
  .related-tnm {
    background-color: #fff;
    margin-bottom: 2rem;
  }
  hr {
    border-bottom: 1px solid #BDBDBD;
  }
  h3 {
    padding: .5em .5em 0;
  }
  .slide-top {
    background-color: white;
  }
  .slide {
    overflow-x: scroll;
  }
</style>
