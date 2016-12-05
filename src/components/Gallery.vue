<template>
  <div class="vue-ig-box">
    <h1>Hello World</h1>
    <div v-for="(image, index) in images" class="vue-ig-image">
      <img :src="image.thumb" @click="showLightBox(index)" >
    </div> <!-- .vue-ig-image -->
    <div class="vue-ig-modal">
      <img :src="images[select].src" class="vue-ig-modal-image">
      <div v-if="thumbnail" class="vue-ig-modal-thumbs">
        <div v-for="(image, index) in images" 
             class="vue-ig-modal-thumbnail" 
             :style="`background-image: url('${ image.thumb }')`"
        >
        </div>
      </div> <!-- .vue-ig-modal-thumbs -->
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

  .vue-ig-modal .vue-ig-modal-thumbs {
    bottom: 10px;
    height: 50px;
    padding: 0 50px;
    position: absolute;
    text-align: center;
    white-space: nowrap
  }

  .vue-ig-modal .vue-ig-modal-thumbs .vue-ig-modal-thumbnail {
    display: inline-block;
    background-position: center;
    background-size: cover;
    border-radius: 2px;
    cursor: pointer;
    height: 50px;
    width: 50px;
    margin: 2px;
    overflow: hidden;
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, .2);
  }

  .vue-ig-modal img {
    width: 200px;
  }
</style>