<template>
  <v-layout align-center>
    <img style="width: 100%; overflow:hidden;" src="">
      <strong class="tournament-strong t-overflow">{{ tournament }}</strong>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        // src: this.tournament.imagesURL[this.tournament.defaultImg]
      }
    },
    props: ['tournament']
  }
</script>
<style lang="scss" scoped>
.aaa {
  display: block
}
  .tournament {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.20em;
    border-bottom-right-radius: 0;
    width: 10em;
    height: 11em;
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    position: relative;
    margin: 1em;
  }

  .tournament-strong {
    background-color: #00BCD4;
    color: #FFFFFF;
    border-bottom: 1px solid #BDBDBD;
    padding: .2em;
  }

  .tournament-text {
    color: #757575;
    padding: .1em .5em;
    margin: 0;
  }

  .t-overflow {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 10rem;
  }

  .tournament-img {
    width: 10rem!important;
    height: ( 10rem / (16/9) )!important;
  }

  .see-more {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    cursor: pointer;
    background-color: #8BC34A;
    border-top-left-radius: 20%;
    transition: background-color .2s;
    padding: 0 .5em;
    margin: 0;
    
    &:hover { background-color: rgba(139, 195, 74, .8); }
  }
</style>
