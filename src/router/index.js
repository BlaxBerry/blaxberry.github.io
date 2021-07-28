import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills/Skills.vue')
  }, 
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works/Works.vue')
  },
  {
    path: '/detail/skill',
    name: 'SkillDetail',
    component: () => import('../views/Detail/Skill/Detail.vue')
  },
  {
    path: '/detail/work',
    name: 'WorkDetail',
    component: () => import('../views/Detail/Work/Detail.vue')
  },
  {
    path: '/versions',
    component: () => import('../views/Versions/Versions.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
