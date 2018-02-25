<template>
<div @click="goToAllTournaments">
  <article class="tournament">
    <div class="more-text">
      <i class="material-icons plus-icon">add_circle_outline</i>
      <p>Ver más</p>
    </div>
  </article>
</div>
</template>
<script>
  export default { methods: { goToAllTournaments () { this.$router.push({ name: 'allTournaments' }) } } }
</script>

<style lang="scss" scoped>
  .more-text {
    position: absolute;
    top: calc( 50% - 3rem );
    left: calc( 50% - 2rem );
    color: rgba(0,0,0,.6);
    max-width: 4rem;
    transition: color .25s;
    text-align: center;
    
    &:hover {
      color: rgba(0,0,0,.5);
    }
  }

  .plus-icon {
    font-size: 4rem;
  }

  .tournament {
    border-radius: 0.20em;
    width: 10em;
    height: 11em;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    position: relative;
    margin: 1em;

    & > * , & > * > *{
      cursor: pointer;
    }
  }
</style>
