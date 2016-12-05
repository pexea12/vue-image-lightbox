<template>
  <div class="vue-ig-box">
    <h1>Hello World</h1>
    <div v-for="(image, index) in images" class="vue-ig-image">
      <img :src="image.thumb" @click="showLightBox(index)">
    </div>
    <div class="vue-ig-modal">
      <img :src="images[select].src" class="vue-ig-modal-image">
      <ul v-if="thumbnail" class="vue-ig-modal-thumbs">
        <li v-for="(image, index) in images">
          <img :src="image.thumb">
        </li>
      </ul>
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

      comment: {
        type: Boolean,
        default: false,
      },

      thumbnail: {
        type: Boolean,
        default: true,
      },
    },

    data() {
      return {
        select: 0,
      }
    },

    methods: {
      showLightBox(index) {
        this.$set(this, 'select', index)
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

  .vue-ig-modal ul.vue-ig-modal-thumbs li {
    display: inline-block;
  }

  .vue-ig-modal img {
    width: 200px;
  }
</style>