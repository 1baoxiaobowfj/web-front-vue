import Vue from 'vue'
import Vuex from 'vuex'
import https from '../../common/https'

Vue.use(Vuex)

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    register(state:any, params:any){//注册
        const url = '/myapi/register'
        return  https.post(url, params).then((res: any) => {
            return res
        })
    },
  },
  modules: {
  },
  strict: true
}