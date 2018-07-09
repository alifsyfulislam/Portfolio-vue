import Vue from 'vue'
import VueRouter from  'vue-router'

import Home from './components/Home'
import About from './components/About'
import Certi from './components/Certi'
import Contact from './components/Contact'

Vue.use(VueRouter)

const router = new VueRouter ({
  routes: [
    {
      path:'/',
      component: Home,
    },
    {
      path:'/about',
      component: About,
    },
    {
      path:'/certi',
      component: Certi,
    },
    {
      path:'/contact',
      component: Contact,
    }
  ]
})

export default router
