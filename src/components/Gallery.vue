<template>
  <div class="vue-lb-box">
    <h1>Hello World</h1>
    <div v-for="(image, index) in images" class="vue-lb-image">
      <img :src="image.thumb" @click="showLightBox(index)" >
    </div> <!-- .vue-lb-image -->
    <div class="vue-lb-modal">
      <figure class="vue-lb-modal-figure">
        <img :src="images[select].src" class="vue-lb-modal-image">
      </figure>
      <div v-if="thumbnail" class="vue-lb-modal-thumbs">
        <div v-for="(image, index) in images" 
             class="vue-lb-modal-thumbnail" 
             :style="`background-image: url('${ image.thumb }')`"
        >
        </div>
      </div> <!-- .vue-lb-modal-thumbs -->
    </div> <!-- .vue-lb-modal -->
  </div> <!-- .vue-lb-box -->
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
  .vue-lb-box {
    width: 100%;
  }
  .vue-lb-box .vue-lb-image {
    display: inline-block;
    margin: 5px;
  }

  .vue-lb-box .vue-lb-image img:hover {
    cursor: pointer;
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .vue-lb-box .vue-lb-image img {
    vertical-align: middle;
    display: block;
    width: 100px;
    height: 80px;
    border-radius: 5px;
    opacity: 0.8;
    filter: alpha(opacity=80);
  }

  .vue-lb-modal {
    /*display: none;*/
    background-color: black;
  }

  .vue-lb-modal .vue-lb-modal-thumbs {
    bottom: 10px;
    height: 50px;
    padding: 0 50px;
    position: absolute;
    text-align: center;
    white-space: nowrap
  }

  .vue-lb-modal .vue-lb-modal-thumbs .vue-lb-modal-thumbnail {
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

  .vue-lb-modal img {
    width: 200px;
  }
</style>