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

      <div v-if="thumbnail" class="vue-lb-thumbnail">
        <button type="button" class="vue-lb-thumbnail-arrow vue-lb-thumbnail-left" style="height: 54px; width: 40px;">
          <span>
            <svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">
              <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"></path>
            </svg>
          </span>
        </button>
        <div v-for="(image, index) in images" 
             class="vue-lb-modal-thumbnail" 
             :style="`background-image: url('${ image.thumb }')`"
             @click="showLightBox(index)"
        >
        </div> <!-- .vue-lb-modal-thumbail -->
        <button type="button" class="vue-lb-thumbnail-arrow vue-lb-thumbnail-right" title="Previous (Right arrow key)" style="height: 54px; width: 40px;">
          <span>
            <svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">
              <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"></path>
            </svg>
          </span>
        </button>
      </div> <!-- .vue-lb-thumbnail -->

      <button type="button" class="arrow_1d5fttb-o_O-arrow__direction__left_shhpn5-o_O-arrow__size__medium_9f7hgo" title="Previous (Left arrow key)">
        <span>
          <svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">
            <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"></path>
          </svg>
        </span>
      </button>

      <button type="button" class="arrow_1d5fttb-o_O-arrow__direction__right_174p6a9-o_O-arrow__size__medium_9f7hgo" title="Previous (Right arrow key)">
        <span>
          <svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">
            <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"></path>
          </svg>
        </span>
      </button>
    </div> <!-- .vue-lb-container -->
      
    

    <div v-for="(image, index) in images" class="vue-lb-image">
      <img :src="image.thumb" @click="showLightBox(index)" >
    </div> <!-- .vue-lb-image -->
    <div class="vue-lb-modal">
      
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

  .vue-lb-figure img.vue-lb-modal-image {
    cursor: pointer;
    max-height: calc(100vh - 140px);
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

  .vue-lb-footer {
    box-sizing: border-box;
    color: white;
    cursor: auto;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    left: 0px;
    line-height: 1.3;
    padding-bottom: 5px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px;
    -moz-box-sizing: border-box;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
  }

  .vue-lb-footer-info {
    display: block;
    flex: 1 1 0;
    -webkit-flex: 1 1 0;
    -ms-flex: 1 1 0;
  }

  .vue-lb-footer-count {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.85em;
    padding-left: 1em;
  }

  .vue-lb-thumbnail {
    bottom: 10px;
    height: 50px;
    padding: 0 50px;
    position: absolute;
    text-align: center;
    white-space: nowrap
  }

  .vue-lb-modal-thumbnail {
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

  .vue-lb-thumbnail-arrow {
    height: 54px;
    width: 40px;
    background: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    padding: 10px;
    position: absolute;
    top: 50%;
    -webkit-touch-callout: none;
    user-select: none;
    height: 50px;
    margin-top: -25px;
    width: 30px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  .vue-lb-thumbnail-left {
    left: 10px;
  }

  .vue-lb-thumbnail-right {
    right: 10px;
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

  


  .vue-lb-modal .vue-lb-modal-thumbs .vue-lb-modal-thumbnail {
    
  }

</style>