import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
export default new Vuetify({})

// Material Design icons
import '@mdi/font/css/materialdesignicons.css'


// 每次跳转回到页面顶部
router.beforeEach((to, from, next) => {    
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})



new Vue({
  router,
  vuetify: new Vuetify,
  render: h => h(App)
}).$mount('#app')
