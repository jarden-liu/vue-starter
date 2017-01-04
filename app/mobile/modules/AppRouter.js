import IndexPage from './App';
import VueRouter from 'vue-router';
import Page1Router from './page1/Page1Router.js';
import HomeRouter from './home/HomeRouter.js';

const router = new VueRouter({
  routes: [{
    path: '/',
    component: IndexPage,
    redirect: '/home',
    children: [
      Page1Router,
      HomeRouter
    ]
  }]
});

export default router;
