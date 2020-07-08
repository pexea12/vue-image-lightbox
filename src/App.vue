<template>
  <div
    id="app"
    style="background-color: yellow"
    class="row"
  >
    <div
      v-for="i in [0, 1, 2, 3, 4]"
      :key="i"
    >
      <p>{{ paragraphs[0] }}</p>
      <p>{{ paragraphs[1] }}</p>
    </div>
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
        :site-loading="siteLoading"
      />
    </div>
  </div>
</template>

<script>
import LightBox from 'components/LightBox'

import siteLoading from './siteloading.gif'
import {
  media,
  paragraphs,
} from './dummy'

export default {
  components: {
    LightBox,
  },

  data () {
    return {
      media,
      siteLoading,
      paragraphs,
    }
  },

  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>
