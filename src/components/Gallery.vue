<template>
  <div class="vue-ig-box">
    <h1>Hello World</h1>
    <div v-for="image in images" class="vue-ig-image">
      <img :src="image.src">
    </div>
  </div>
</template>

<script>
	export default {
    props: {
      images: {
        type: Array,
        required: true,
      },

      thumbnail: {
        type: Boolean,
      },
    },

    data() {
      return {
      }
    }
  }
</script>

<style scoped>
</style>