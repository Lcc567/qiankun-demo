import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login
  },
  state: {
    user: {
      // username: 'lee'
    }
  },
  mutations: {
    setUser(state, user) {
      console.log('user', user);
      state.user = user
    }
  },
  actions: {

  }
})
