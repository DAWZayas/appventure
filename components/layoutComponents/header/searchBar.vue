<template>
<div class="search d-flex">
  <v-text-field color="primary" placeholder=" Search..." hide-details autofocus></v-text-field>
</div>
</template>
<script>
export default {
  props: ['open'],
  methods: {
    openBar: () => { document.querySelector('.search').style.marginTop = 0 },
    closeBar: () => { document.querySelector('.search').style.marginTop = '-4rem' }
  },
  watch: {
    open: function () {
      console.log(this.open)
      this.open ? this.openBar() : this.closeBar()
    }
  }
}
</script>
<style lang="scss" scoped>
  .search {
    position: fixed;
    right: 20;
    left: 0;
    top: 0;
    margin-top: -4rem;
    transition: margin-top .25s ease-out;
    z-index: 1000;
    background-color: white;
  }
</style>
