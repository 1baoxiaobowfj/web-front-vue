import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Regist from './modules/regist'
import { setStorage, getStorage, clearStorage } from '@/common/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getStorage('token') || null,
    userInfo: getStorage('userInfo') || null,
  },
  mutations: {
    setToken(state, data) {
      data ? setStorage('token', data) : clearStorage('token');
      state.token = data
    },
    setUserInfo(state, data) {
      data ? setStorage('userInfo', data) : clearStorage('userInfo');
      state.userInfo = data
    },
    logout() {
      clearStorage('token');
      clearStorage('userInfo');
    },
  },
  actions: {
  },
  modules: {
    Login,
    Regist
  }
})
