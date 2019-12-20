import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import(/* webpackChunkName: "login" */ '../views/regist.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
