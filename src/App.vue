<template>
  <div id="app" style="background-color: red">
    <h1>Testing</h1>
    <gallery :images="images"></gallery>
  </div>
</template>

<script>

let images = [
  {
    thumb: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
    src: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
  },
  {
    thumb: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png',
    src: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png',
  },
  {
    thumb: 'http://7606-presscdn-0-74.pagely.netdna-cdn.com/wp-content/uploads/2016/03/Dubai-Photos-Images-Oicture-Dubai-Landmarks-800x600.jpg',
    src: 'http://7606-presscdn-0-74.pagely.netdna-cdn.com/wp-content/uploads/2016/03/Dubai-Photos-Images-Oicture-Dubai-Landmarks-800x600.jpg',
  },
  {
    thumb: 'http://www.w3schools.com/css/img_fjords.jpg',
    src: 'http://www.w3schools.com/css/img_fjords.jpg',
  },
]

import Gallery from 'components/Gallery.vue'

export default {
  name: 'app',

  components: {
    Gallery,
  },

  data () {
    return {
      images: images,
    }
  }
}
</script>