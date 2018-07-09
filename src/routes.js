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
      path:'Portfolio-vue/#/',
      component: Home,
    },
    {
      path:'Portfolio-vue/#/about',
      component: About,
    },
    {
      path:'Portfolio-vue/#/certi',
      component: Certi,
    },
    {
      path:'Portfolio-vue/#/contact',
      component: Contact,
    }
  ]
//   routes: [
//     {
//       path:'/',
//       component: Home,
//     },
//     {
//       path:'/about',
//       component: About,
//     },
//     {
//       path:'/certi',
//       component: Certi,
//     },
//     {
//       path:'/contact',
//       component: Contact,
//     }
//   ]
})

export default router
