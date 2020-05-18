import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/base_template/Home.vue'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/base_template/Home'),
        name: 'Home'
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/base_template/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
