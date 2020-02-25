<template>
  <div id="app" style="background-color: yellow" class="row">
    <div>
      <ul>
        <li 
          v-for="(image, index) in images" 
          style="display: inline-block"
        >
          <img 
            v-lazy="image.src || image.thumb"
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
        <template slot="video" slot-scope="{sources}">
          <video
            controls
            width="800"
            height="500"
          >
            <source
              v-for="source in sources"
              :src="source.src"
              :type="source.type"
            />
          </video>
        </template>
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
