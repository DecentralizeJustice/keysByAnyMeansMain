import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      beforeEnter (to, from, next) {
        // Put the full page url including the protocol http(s) below
        window.location = 'https://www.decentralizejustice.com/blog'
      }
    }
  ]
})
