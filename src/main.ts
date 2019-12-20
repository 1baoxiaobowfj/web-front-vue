import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import https from './common/https'
import { Button, Form, Input, FormItem, Message } from 'element-ui'
import '../src/assets/public.less'

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)

Vue.config.productionTip = false
Vue.prototype.$https = https
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
