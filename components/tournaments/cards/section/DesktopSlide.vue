<template>
  <div>
    <div class="see-less" @click="seeLess"><v-icon class="noselect">keyboard_arrow_left</v-icon></div>
    <div class="see-more" @click="seeMore"><v-icon class="noselect">keyboard_arrow_right</v-icon></div>
  </div>
</template>
<script>
  export default {
    props: ['scroll'],
    methods: {
      seeMore () { this.$emit('seeMore') }
    }
  }
</script>
<style lang="scss" scoped>
  .see-less {
    background: linear-gradient(right, rgba(250,250,250,0) 0%, rgba(255,255,250,.9) 50%, rgba(250,250,250,1) 100%);
    left: 0;
    .icon {
      left: 0;
    }
  }

  .see-more {
    background: linear-gradient(left, rgba(250,250,250,0) 0%, rgba(255,255,250,.9) 50%, rgba(250,250,250,1) 100%);
    right: 0;    
    .icon {
      right: 0;
    }
  }

  .see-less, .see-more {
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
    width: 5rem;
    transition: all .25s;

    .icon {
      cursor: pointer;
      position: absolute;
      color: transparent;
      height: 100%;
      margin: auto;
      transform: scale(2, 3)
    }

    &:hover {
      width: 7em;
      .icon {
        color: rgba(0, 0, 0, .3);      
      }
    }
  }
</style>
