<template>
  <div class="col-6 col-lg-3 mb-r">
    <div class="view overlay hm-white-slight z-depth-1-half mb-2">
      <img :src="sport.src" class="img-fluid" :alt="sport.sport">
      <a>
        <div class="mask"></div>
      </a>
    </div>
    <a href="" class="light-green-text"><h6 class="mb-3 mt-3"><i class="fa fa-map "></i><strong> {{ sport.location }}</strong></h6></a>
    <h4 class="mb-3">{{ sport.highlight }}</h4>
    <p>by <a><strong>{{ sport.announcer }}</strong></a>, {{ sport.date }}</p>
    <p><a>{{ sport.sport }} </a>{{ sport.description }}</p>
    <a class="btn btn-light-green btn-rounded">¡Apúntate!</a>
  </div>
</template>
<script>
  export default {
    props: ['sport'],
    data () {
      return {
      }
    }
  }
</script>
