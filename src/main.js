import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import VueTouch from 'vue-touch'

Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VueLazyload)

new Vue({
  el: '#app',
  render: h => h(App)
})
