import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";
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
    subNum(state) {
      state.num--;
    },
  },
  actions: {
    sub({ commit, state }) {
      setTimeout(() => {
        commit("subNum");
      }, 1000);
    },
  },
  modules: {},
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.localStorage,
      // 存储的 key 的key值
      key: "store",
      render(state) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state };
      },
    }),
  ],
});
