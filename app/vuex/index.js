import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

let mainStore = new Vuex.Store({
  state: {
    provinceList: [{
      MC: '123'
    }]
  },
  mutations: mutations,
  actions: actions,
  getters: getters
});


export default mainStore;
