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
      <lightbox 
        :images="images" 
        ref="lightbox"
        :show-caption="true"
      ></lightbox>
    </div>
  </div>
</template>

<script>

let images = [
  {
    thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    src: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    caption: '<h4>Hello World 1</h4>',
  },
  {
    thumb: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    src: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    caption: '<h4>Hello World 2</h4>',
  },
  {
    thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    src: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    caption: '<h4>Hello World 3</h4>',
  },
  {
    thumb: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    src: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    caption: '<h4>Hello World 4</h4>',
  },
  {
    thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    src: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    caption: '<h4>Hello World 5</h4>',
  },
  {
    thumb: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    src: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    caption: '<h4>Hello World 6</h4>',
  },
  {
    thumb: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    src: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    src: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    src: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    src: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    src: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    src: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/03/image-3.jpg',
    src: 'http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/03/image-3.jpg',
    caption: '<h4>Hello World</h4>',
  },
]

import Lightbox from 'components/Lightbox'

import siteLoading from './siteloading.gif'

export default {
  components: {
    Lightbox,
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
