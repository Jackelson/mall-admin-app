import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Layout/Home/index.vue';
import Login from '../views/login';
import store from '@/store';
import permission from "../utils/permission";

Vue.use(VueRouter);
const asyncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    isShow: true,
    meta: {
      title: '商品管理',
    },
    type: 'shop',
    component: Home,
    children: [
      {
        path: '/list',
        name: 'List',
        meta: {
          title: '商品列表',
        },
        type: 'apartment',
        component: () => import("../views/Layout/Product/List")
      }, {
        path: '/add',
        name: 'Add',
        meta: {
          title: '添加商品',
        },
        type: 'bars',
        component: () => import("../views/Layout/Product/addProduct")
      }, {
        path: '/category',
        name: 'Category',
        meta: {
          title: '类目管理',
        },
        type: 'menu',
        component: () => import("../views/Layout/Product/Category")
      },

    ]
  }
]
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
    isShow: true,
    type: 'home',
    children: [
      {
        path: '/index',
        name: 'Index',
        type: 'fund',
        component: () => import('../views/Layout/Home/Statis/index.vue'),
        meta: {
          title: '统计'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    isShow: false,
    meta: {
      title: "login"
    }
  },
];
const router = new VueRouter({
  routes,
});
let isRouter = false;
router.beforeEach(function (to, from, next) {

  if (to.path !== '/login') {
    if (store.state.userInfo.username && store.state.userInfo.email) {
      const sub = permission(store.state.userInfo.role, asyncRouterMap);
      store.dispatch('changeMenu', routes.concat(sub));
      if (!isRouter) {
        router.addRoutes(sub);
        isRouter = true;
      }
      return next()
    } else {
      return next('/login')
    }
  }
  next()
})

export default router;
