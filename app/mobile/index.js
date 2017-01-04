import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import '../config';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import appRouter from './modules/AppRouter';

console.log('mobile');

Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.credentials = true;

// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'production') {
//   console.log(123);
// }

/* eslint-disable no-new */
new Vue({
  mode: 'history',
  base: __dirname,
  router: appRouter
}).$mount('#app');
