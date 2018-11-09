import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/views/Home';
import DetailView from '@/views/Details';
import MickeyView from '@/views/Mickey';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/detail',
      name: 'Details',
      component: DetailView,
    },
    {
      path: '/mickey',
      name: 'Mickey',
      component: MickeyView,
    },
  ],
});
