import Vue from 'vue'
import Vuex from 'vuex'
import Login from './modules/login'
import Regist from './modules/regist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Login,
    Regist
  }
})
