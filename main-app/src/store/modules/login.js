import Vue from 'vue';
import Vuex from 'vuex';
import { login } from '../../api/login'
import { LOGIN } from "../actions-type";
Vue.use(Vuex)

export default {
  namespaced: true,
  state: {

  },
  mutations: {
    [LOGIN](state, payload, root) {
      console.log('-------', root);
    }
  },
  actions: {
    async [LOGIN]({ dispatch, commit }, data) {
      const result = await login(data)
      console.log('===========', result);
      if (result.code === 200) {

        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("token", result.data.token);
        commit('setUser', result.data, { root: true })
      }
    }
  }
}