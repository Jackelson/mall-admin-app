import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Catagory.vue';
import Shopping from '../views/Shopping.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'shopping',
        component: Shopping,
      },
      {
        path: 'category',
        component: Category,
      },
    ],
  },
  {
    path: '*',
    redirect: '/home',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
