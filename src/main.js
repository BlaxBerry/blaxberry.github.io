import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// vue router
import router from './router'

// vuex
import store from './store'

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
import loadingPic from './assets/loading/loading-mobile.png'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadingPic, // for Detail Work's mobile pic
  attempt: 1
})



new Vue({
  router,
  store,
  vuetify: new Vuetify,
  render: h => h(App)
}).$mount('#app')
