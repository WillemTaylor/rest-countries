import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import Country from '../components/country.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:country',
    name: 'Country',
    component: Country,
  },
];

const router = new VueRouter({
  routes: routes,
  mode: 'hash',
  base: process.env.BASE_URL,
});

export default router;
