<template>
  <div id="app" style="background-color: yellow" class="row">
    <h1>Testing</h1>
    <div class="col-lg-4 col-md-12 col-sm-12">
      <gallery :images="images"></gallery>
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
  }
}
</script>