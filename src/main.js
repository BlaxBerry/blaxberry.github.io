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


new Vue({
  router,
  vuetify: new Vuetify,
  render: h => h(App)
}).$mount('#app')
