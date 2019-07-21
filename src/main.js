import Vue from 'vue'
import App from './App.vue'
import VueRx from 'vue-rx'
import buefy from 'buefy'

Vue.config.productionTip = false

Vue.use(VueRx)
Vue.use(buefy)
new Vue({
  render: h => h(App),
}).$mount('#app')
