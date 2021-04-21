import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
import VueScrollmagic from 'vue-scrollmagic'
Vue.use(VueScrollmagic)

library.add(faFontAwesome)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
