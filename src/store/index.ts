import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Regist from './modules/regist'
import { setStorage, getStorage, clearStorage } from '@/common/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getStorage('token') || null,
  },
  mutations: {
    setToken(state, data) {
      data ? setStorage('token', data) : clearStorage('token');
      state.token = data
    }
  },
  actions: {
  },
  modules: {
    Login,
    Regist
  }
})
