import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
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
      component: () => import('../views/Detail/Work/index.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile/Profile.vue')
    },
    {
      path: '/versions',
      component: () => import('../views/Versions/Versions.vue')
    },
  ]
})


// 路由守卫
router.beforeEach((to, from, next) => {
  // 每次跳转回到页面顶部
  document.body.scrollTop = 0; // chrome
  document.documentElement.scrollTop = 0;  // firefox
  window.pageYOffset = 0; // safari

  next()
})

export default router
