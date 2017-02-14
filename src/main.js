import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

import siteloading from './siteloading.gif'

// Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  error: siteloading,
  loading: siteloading,
  attempt: 5,
})

new Vue({
  el: '#app',
  render: h => h(App)
})
