<template>
  <div
    id="app"
    style="background-color: yellow"
    class="row"
  >
    <div>
      <ul>
        <li
          v-for="(image, index) in media"
          :key="index"
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
        ref="lightbox"
        :media="media"
        :show-caption="true"
        :show-light-box="false"
      />
    </div>
  </div>
</template>

<script>
import LightBox from 'components/LightBox'

import siteLoading from './siteloading.gif'
import media from './dummy'

export default {
  components: {
    LightBox,
  },

  data () {
    return {
      media,
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
