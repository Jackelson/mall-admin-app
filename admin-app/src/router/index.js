import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Layout/Home.vue';
import Login from '../views/login';
import store from '@/store'

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];
const router = new VueRouter({
  routes,
});
router.beforeEach(function (to, from, next) {
  if (to.path !== '/login') {
    if(store.state.userInfo.username && store.state.userInfo.email ){
      return  next()
    }else {
      return next('/login')
    }
  }
  next()
})

export default router;
