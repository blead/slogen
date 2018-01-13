import Vue from 'vue';
import Router from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import Home from '@/components/Home';
import Main from '@/components/Main';
import FunFacts from '@/components/FunFacts';
import Customize from '@/components/Customize';

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'Main',
          component: Main,
        },
        {
          path: 'facts',
          name: 'FunFacts',
          component: FunFacts,
        },
      ],
    },
    {
      path: '/custom',
      name: 'Customize',
      component: Customize,
    },
  ],
});
