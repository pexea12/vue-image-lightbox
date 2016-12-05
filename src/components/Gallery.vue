<template>
  <div class="vue-ig-box">
    <h1>Hello World</h1>
    <div v-for="(image, index) in images" class="vue-ig-image">
      <img :src="image.thumb" @click="showLightBox(index)">
    </div>
    <div class="vue-ig-modal">
      <img src="http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg">
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
    },

    methods: {
      showLightBox(index) {
        alert(index)
      }
    }
  }
</script>

<style scoped>
  .vue-ig-box .vue-ig-image {
    display: inline-block;
    margin: 10px;
  }

  .vue-ig-box .vue-ig-image img {
    width: 100px;
    height: 80px;
  }

  .vue-ig-modal {
    /*display: none;*/
    background-color: black;
  }

  .vue-ig-modal img {
    width: 200px;
  }
</style>