<template>
  <div class="vue-lb-box">
    <h1>Hello World</h1>
    <div class="vue-lb-container">
      <div class="vue-lb-content">
        <div class="vue-lb-header">
          <button title="Close (Esc)" class="vue-lb-button-close">
            <span>
              <svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"></path>
              </svg>
            </span>
          </button> <!-- .vue-lb-button-close -->
        </div> <!-- .vue-lb-header -->
        <div class="vue-lb-figure">
          <img :src="images[select].src" class="vue-lb-image">
          <div class="vue-lb-footer">
            <div class="vue-lb-footer-info">
              Photo by Jay Ruzesky
            </div> <!-- .vue-lb-footer-info -->
            <div class="vue-lb-footer-count">
              3/10
            </div> <!-- .vue-lb-footer-count -->
          </div> <!-- .vue-lb-footer -->
        </div> <!-- .vue-lb-modal-figure -->
      </div> <!-- .vue-lb-content -->
    </div> <!-- .vue-lb-container -->
      


    <div v-for="(image, index) in images" class="vue-lb-image">
      <img :src="image.thumb" @click="showLightBox(index)" >
    </div> <!-- .vue-lb-image -->
    <div class="vue-lb-modal">
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

  .vue-lb-container {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0px;
    padding: 10px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2001;
    -webkit-align-items: center;
    -moz-box-sizing: border-box;
    -webkit-justify-content: center;
    -ms-flex-align: center;
    -webkit-box-align: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
  }

  .vue-lb-content {
    margin-bottom: 60px;
    max-width: 1024px;
    position: relative;
  }

  .vue-lb-header {
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    height: 40px;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
  }

  .vue-lb-header button.vue-lb-button-close {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    position: relative;
    top: 0px;
    vertical-align: bottom;
    height: 40px;
    margin-right: -10px;
    padding: 10px;
    width: 40px;
  }

  .vue-lb-figure {
    margin: 0px;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 40px;
    -webkit-margin-end: 40px;
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

  

  

  

  .vue-lb-box .vue-lb-content div.vue-lb-modal-figure img.vue-lb-modal-image {
    cursor: pointer;
    display: block;
    height: auto;
    margin: 0 auto;
    max-width: 100%;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
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

</style>