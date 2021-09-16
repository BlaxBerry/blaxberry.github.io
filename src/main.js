import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


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

// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
export default new Vuetify({})

// Material Design icons
import '@mdi/font/css/materialdesignicons.css'

// Vue Typer
import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)

// vue Smooth Scroll
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

// Vue Carousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// vue lazyload
import VueLazyload from 'vue-lazyload'
const loadimage = require('./assets/loading/loading.gif')
const errorimage = require('./assets/loading/loading.gif')
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
})



new Vue({
  router,
  vuetify: new Vuetify,
  render: h => h(App)
}).$mount('#app')
