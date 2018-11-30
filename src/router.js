import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      mode: 'history',
      name: 'home',
      component: () => import('./views/Home.vue')
    }
  ]
})
