import Vue from 'vue';
var bus = new Vue();

module.exports = function(Vue) {
  Vue.mixin({
    created: function() {
      this.$bus = bus;
    }
  });
};
