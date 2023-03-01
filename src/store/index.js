import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    str: "我是vuex里的数据",
    num: 1,
  },
  getters: {},
  mutations: {
    addNum(state) {
      state.num++;
    },
  },
  actions: {},
  modules: {},
});
