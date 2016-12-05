<template>
  <div class="vue-ig-box">
    <h1>Hello World</h1>
    <div v-for="(image, index) in images" class="vue-ig-image">
      <img :src="image.thumb" @click="showLightBox(index)" >
    </div> <!-- .vue-ig-image -->
    <div class="vue-ig-modal">
      <img :src="images[select].src" class="vue-ig-modal-image">
      <ul v-if="thumbnail" class="vue-ig-modal-thumbs">
        <li v-for="(image, index) in images">
          <img :src="image.thumb">
        </li>
      </ul> <!-- .vue-ig-modal-thumbs -->
    </div> <!-- .vue-ig-modal -->
  </div> <!-- .vue-ig-box -->
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
  .vue-ig-box {
    width: 100%;
  }
  .vue-ig-box .vue-ig-image {
    display: inline-block;
    margin: 5px;
  }

  .vue-ig-box .vue-ig-image img:hover {
    cursor: pointer;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .vue-ig-box .vue-ig-image img {
    vertical-align: middle;
    display: block;
    width: 100px;
    height: 80px;
    border-radius: 5px;
    opacity: 0.8;
    filter: alpha(opacity=80);
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