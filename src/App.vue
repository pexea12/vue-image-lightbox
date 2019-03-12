<template>
  <div id="app" style="background-color: yellow" class="row">
    <div>
      <ul>
        <li 
          v-for="(image, index) in images" 
          style="display: inline-block"
        >
          <img 
            v-lazy="image.src" 
            style="height: 100px" 
            @click="openGallery(index)"
          >
        </li>
      </ul>
      <LightBox 
        :images="images" 
        ref="lightbox"
        :show-caption="true"
        :show-light-box="false"
      >
      </LightBox>
    </div>
  </div>
</template>

<script>
import LightBox from 'components/LightBox'

import siteLoading from './siteloading.gif'
import images from './dummy'

export default {
  components: {
    LightBox,
  },

  data () {
    return {
      images,
      siteLoading,
    }
  },

  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>
