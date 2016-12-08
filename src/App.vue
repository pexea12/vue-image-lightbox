<template>
  <div id="app" style="background-color: yellow" class="row">
    <div class="col-lg-4 col-md-12 col-sm-12">
      <h1>Testing</h1>  

      <ul>
        <li v-for="(image, index) in images" style="display: inline-block">
          <img :src="image.src" alt="" style="height: 100px" @click="openGallery">
        </li>
      </ul>
      <gallery :images="images" :show-light-box="false"></gallery>
    </div>
  </div>
</template>

<script>

let images = [
  {
    thumb: 'https://images.unsplash.com/photo-1454991727061-be514eae86f7?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1454991727061-be514eae86f7?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1452274381522-521513015433?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1452274381522-521513015433?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1471145653077-54c6f0aae511?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1471145653077-54c6f0aae511?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1470777639313-60af88918203?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1470777639313-60af88918203?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1471127432458-65206be149c9?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1471127432458-65206be149c9?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
  {
    thumb: 'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=1024',
    src: 'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=1024',
    caption: '<h4>Hello World</h4>',
  },
]

import Gallery from 'components/Gallery'

export default {
  name: 'app',

  components: {
    Gallery,
  },

  data () {
    return {
      images: images,
    }
  },

  methods: {
    openGallery() {
      this.$children[0].showImage(4)
    }
  }
}
</script>