import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/ant-design-vue';
import '@/styles/reset.less';
import VCharts from 'v-charts'
// Vue.config.productionTip = false;
Vue.use(VCharts);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
