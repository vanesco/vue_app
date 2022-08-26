import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navActive: ''
  },
  mutations: {
    makeActive(state, item) {
      state.navActive = item;
    }
  },
  actions: {}
});
