import IndexPage from './App';
import VueRouter from 'vue-router';
import Page1Router from './page1/Page1Router.js';

const router = new VueRouter({
  routes: [{
    path: '/',
    component: IndexPage,
    children: []
  }, Page1Router]
});

export default router;
