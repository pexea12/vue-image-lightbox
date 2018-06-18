import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'

Vue.use(VueLazyload)

new Vue({
  el: '#app',
  render: h => h(App)
})
