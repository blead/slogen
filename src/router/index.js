import Vue from 'vue';
import Router from 'vue-router';
import Buefy from 'buefy';
import Main from '@/components/Main';

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
});
