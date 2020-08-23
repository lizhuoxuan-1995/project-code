import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '成都',
    userName: '',
  },
  mutations: {
    changeLocation(state, { city }) {
      state.city = city;
    },
    getLocation(state, val) {
      state.city = val;
    },
    changeUserName(state, data) {
      state.userName = data;
    },
    resetLogin(state) {
      state.userName = ''
    }
  },
  actions: {
    getLocation({ commit }, val) {
      commit('getLocation', val);
    }
  },
  modules: {

  }
})
