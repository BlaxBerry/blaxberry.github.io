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
    path: '/skill',
    name: 'SKill',component: () => import('../views/Skill/Skill.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
