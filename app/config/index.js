import Vue from 'vue';
import vueConfig from 'vue-config';
import network from './network';

let configs = network;
Vue.use(vueConfig, configs);
