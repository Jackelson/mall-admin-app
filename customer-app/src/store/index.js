import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideList: [],
    isLoading: false,
    goodsList: [],
    type: '',
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
    changeType(state, type) {
      state.type = type;
    },
  },
  actions: {
    async setSide({ commit }, type) {
      commit('changeLoading', true);
      const list = await api.getSide(type);
      commit('setSide', list);
    },
    async changeList({ commit, state }, info) {
      let newInfo = null;
      if (info.type !== '') {
        newInfo = { ...info, type: info.type };
        commit('changeType', info.type);
      } else {
        newInfo = { ...info, type: state.type };
      }
      console.log(newInfo);
      const vue = await api.getGoods(newInfo);
      commit('changeList', vue);
      commit('changeLoading', false);
    },
  },
});
