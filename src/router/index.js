import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'SKills',component: () => import('../views/Skill/Skills.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
