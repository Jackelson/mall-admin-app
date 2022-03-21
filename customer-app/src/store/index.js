import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
    isLoading: false,
    goodsList: [],
  },
  mutations: {
    setSide(state, list) {
      state.sideList = list;
    },
    changeLoading(state, bool) {
      state.isLoading = bool;
    },
    changeList(state, list) {
      state.goodsList = list;
    },
  },
  actions: {
    async setSide({ commit }, type) {
      commit('changeLoading', true);
      const list = await api.getSide(type);
      commit('setSide', list);
      commit('changeLoading', false);
    },
    async changeList({ commit }, info) {
      const vue = await api.getGoods(info);
      commit('changeList', vue);
    },
  },
});
