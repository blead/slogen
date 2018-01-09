import Vue from 'vue';
import Router from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import Home from '@/components/Home';

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
