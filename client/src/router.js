import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import register from './views/register.vue'
import article from './views/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path : '/register',
      name : 'register',
      component : register
    },
    {
      path : '/upload',
      name : 'upload',
      component : article
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
