<template>
<mt-header fixed :title="navBar.title">
  <router-link :to="navBar.backState" slot="left">
    <mt-button icon="back" v-show="navBar.isBackButtonShow">{{navBar.backButtonText}}</mt-button>
  </router-link>
</mt-header>
</template>



<script>
import Vue from 'vue';
let navBar = {
  name: 'navBar',
  data() {
    return {

    };
  },
  computed: {
    navBar: function() {
      return this.$store.state.navBar;
    }
  },
  beforeCreate: function() {
    // this.$store.state.mobile_components.navBar = {};
    var store = this.$store;
    store.registerModule('navBar', {
      state: {
        title: '',
        backButtonText: '返回',
        isBackButtonShow: true,
        backState: ''
      },
      mutations: {
        'navBar/updateNavBarTitle': function(state, newTitle) {
          state.title = newTitle;
        },
        'navBar/updateBackButtonStatus': function(state, status) {
          state.isBackButtonShow = status;
        },
        'navBar/updateBackState': function(state, backState) {
          state.backState = backState;
        }
      }
    });

    this.$router.afterEach(function() {
      store.commit('navBar/updateBackButtonStatus', true);
    });

    Vue.directive('navTitle', {
      bind: function(el, binding) {
        store.commit('navBar/updateNavBarTitle', binding.value);
      }
    });

    Vue.directive('hideBackButton', {
      bind: function(el, binding) {
        store.commit('navBar/updateBackButtonStatus', false);
      }
    });

    Vue.directive('backState', {
      bind: function(el, binding) {
        store.commit('navBar/updateBackState', binding.value);
      }
    });

  },
  methods: {

  }
};



export default navBar;
</script>


<style lang='sass'>
.temp {}</style>
