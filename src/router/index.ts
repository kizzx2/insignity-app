import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Cover from '../views/Cover.vue';
import Feather from 'vue-icon';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-context/dist/css/vue-context.css';

Vue.use(BootstrapVue);

Vue.use(VueRouter);
Vue.use(Feather, 'v-icon');


const routes = [
  {
    path: '/new',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'cover',
    component: Cover,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
