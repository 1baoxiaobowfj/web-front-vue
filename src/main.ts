import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import https from './common/https'
import {
  Button, Form, Input, FormItem, Message, Loading, Container, Header, Aside, Main,
  Footer, Menu, Submenu, MenuItem, MenuItemGroup
} from 'element-ui'
import '../src/assets/public.less'

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.config.productionTip = false
Vue.prototype.$https = https
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
