import Vue from 'vue'

Vue.directive('img', {
  inserted: function (el, binding, vnode) {
    var img = new Image()
    img.src = binding.value
    var element = el

    img.onload = function () {
      element.src = binding.value
    }
  }
})
