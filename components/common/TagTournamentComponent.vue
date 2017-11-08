<template>
  <div class="col-6 col-lg-3 mb-r">
    <div class="view overlay hm-white-slight z-depth-1-half mb-2">
      <img :src="tournament.src" class="img-fluid" :alt="tournament.sport">
      <a>
        <div class="mask"></div>
      </a>
    </div>
    <a href="" class="light-green-text"><h6 class="mb-3 mt-3"><i class="fa fa-map "></i><strong> {{ tournament.location }}</strong></h6></a>
    <h4 class="mb-3">{{ tournament.highlight }}</h4>
    <p>by <a><strong>{{ tournament.announcer }}</strong></a>, {{ tournament.date }}</p>
    <p><a>{{ tournament.sport }} </a>{{ tournament.description }}</p>
    <a class="btn btn-light-green btn-rounded">¡Apúntate!</a>
  </div>
</template>
<script>
  export default {
    props: ['tournament'],
    data () {
      return {
      }
    }
  }
</script>
