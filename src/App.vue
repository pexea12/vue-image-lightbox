<template>
  <div id="app">
    <h1>Testing</h1>
    <gallery></gallery>
  </div>
</template>

<script>
import Gallery from 'components/Gallery.vue'

export default {
  name: 'app',

  components: {
    Gallery,
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>