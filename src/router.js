import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Confirm = () => import('./components/Confirm.vue');
const Hello = () => import('./components/HelloWorld.vue');

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/confirm',
      name: 'confirm',
      exact: true,
      component: Confirm
    },
    {
      path: '/',
      name: 'hello',
      exact: true,
      component: Hello
    }
  ]
})
