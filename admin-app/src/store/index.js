import Vue from 'vue';
import Vuex from 'vuex';
import {getCookie,setCookie,removeCookie} from '@/utils'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单得转换
    collapsed:false,
    userInfo:getCookie('userInfo'),
    menuRoutes:[]
  },
  mutations: {
    changeCollage(state){
      state.collapsed = !state.collapsed
    },
    setInfo(state,info){
      state.userInfo = info;
    },
    removeInfo(state){
<<<<<<< HEAD
      state.userInfo = {
        // appkey: "",
        // email: "",
        // role: "",
        // username: "",
      };
=======
      state.userInfo = {};
>>>>>>> e8d480eee26bbb0e20f84b3539ae900c3e8feab4
    },
    changeMenu(state,routes){
        state.menuRoutes = routes
    }
  },
  actions: {
    change({ commit }){
      commit('changeCollage')
    },
    setInfo({commit},info){
        commit('setInfo',info);
      setCookie('userInfo',info)
    },
    remove({commit}){
       commit('removeInfo');
      removeCookie('userInfo');
    },
    changeMenu({commit},routes){
        commit("changeMenu",routes)
    }
  },
  modules: {

  },
});
