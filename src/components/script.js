require('./style.css')

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },

    showLightBox: {
      type: Boolean,
      default: true,
    },

    startAt: {
      type: Number,
      default: 0,
    },

    nThumbs: {
      type: Number,
      default: 7,
    },

    showThumbs: {
      type: Boolean,
      default: true,
    },

    // Mode
    autoPlay: {
      type: Boolean, 
      default: false,
    },

    autoPlayTime: {
      type: Number,
      default: 3000,
    },

    siteLoading: {
      default: null,
    },

    showCaption: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      select: this.startAt,
      thumbSelect: this.startAt,
      lightBoxOn: this.showLightBox,
      countImages: this.images.length,
      displayThumbs: this.images.slice(0, this.nThumbs),
      timer: null,

      beginThumbIndex: 0,
    }
  },

  computed: {
    imagesSrc() {
      if (this.siteLoading) {
        return this.images.map(({ src }) => ({
          src,
          loading: this.siteLoading,
          error: this.siteLoading,
        }))
      }

      return this.images.map(({ src }) => src)
    },

    imagesThumb() {
      if (this.siteLoading) {
        return this.displayThumbs.map(({ thumb }) => ({
          src: thumb,
          loading: this.siteLoading,
          error: this.siteLoading,
        }))
      }

      return this.displayThumbs.map(({ thumb }) => thumb)
    },
  },

  mounted() {

    if (this.autoPlay) {
      this.timer = setInterval(() => {
        this.nextImage()
      }, this.autoPlayTime)
    }
  },


  watch: {
    select() {
      let halfDown = Math.floor(this.nThumbs / 2)
      let mod = 1 - (this.nThumbs % 2)

      if (this.select <= halfDown) {
        this.$set(this, 'beginThumbIndex', 0)
        this.$set(this, 'thumbSelect', this.select)
        this.$set(this, 'displayThumbs', this.images.slice(0, this.nThumbs))
        return
      }

      if (this.select >= this.countImages - halfDown) {
        this.$set(this, 'beginThumbIndex', this.countImages - this.nThumbs)
        this.$set(this, 'thumbSelect', this.nThumbs - (this.countImages - this.select))
        this.$set(this, 'displayThumbs', this.images.slice(-this.nThumbs))
        return
      }

      this.$set(this, 'beginThumbIndex', this.select - halfDown + mod)
      this.$set(this, 'thumbSelect', halfDown - mod)
      this.$set(this, 'displayThumbs', this.images.slice(this.select - halfDown + mod, this.select + halfDown + 1))
    }
  },

  methods: {
    showImage(index) {
      document.addEventListener('keydown', this.addKeyEvent)
    
      this.$set(this, 'lightBoxOn', true)
      this.$set(this, 'select', index)
    },

    addKeyEvent(event) {
      if (event.keyCode === 37) this.previousImage()
      if (event.keyCode === 39) this.nextImage()
      if (event.keyCode === 27) this.closeLightBox()
    },

    closeLightBox() {
      this.$set(this, 'lightBoxOn', false)

      document.removeEventListener('keydown', this.addKeyEvent)
    },

    nextImage() {
      this.$set(this, 'select', (this.select + 1) % this.countImages)
    },

    previousImage() {
      this.$set(this, 'select', ((this.select - 1) + this.countImages) % this.countImages)
    }
  },


  beforeDestroy() {
    document.removeEventListener('keydown', this.addKeyEvent)

    if (this.autoPlay) {
      clearInterval(this.timer)
    }
  },
}
