require('./style.css')


export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },

    images: {
      type: Array,
      required: true,
    },

    disableScroll: {
      type: Boolean,
      default: true,
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
      timer: null,
    }
  },

  computed: {
    thumbIndex() {
      const halfDown = Math.floor(this.nThumbs / 2)

      if (this.select >= halfDown && this.select < this.images.length - halfDown)
        return {
          start: this.select - halfDown + (1 - this.nThumbs % 2),
          end: this.select + halfDown,
        }

      if (this.select < halfDown)
        return {
          start: 0,
          end: this.nThumbs - 1,
        }

      return {
        start: this.images.length - this.nThumbs,
        end: this.images.length - 1,
      }
    },

    imagesThumb() {
      if (this.siteLoading) {
        return this.images.map(({thumb}) => ({
          src: thumb,
          loading: this.siteLoading,
          error: this.siteLoading
        }))
      }

      return this.images.map(({thumb}) => thumb)
    },
  },

  watch: {
    lightBoxOn(value) {
      if (document != null) {
        if (value) {
          if (this.disableScroll) {
            document.getElementsByTagName('html')[0].classList.add('no-scroll')
          }
          document.getElementsByTagName('body')[0].classList.add('vue-lb-open')
          this.$emit('lightBoxOn', true)
        } else {
          if (this.disableScroll) {
            document.getElementsByTagName('html')[0].classList.remove('no-scroll')
          }
          document.getElementsByTagName('body')[0].classList.remove('vue-lb-open')
          this.$emit('lightBoxOn', false)
        }
      }
    },

    open(value) {
      if (value) {
        this.showImage(this.startAt)
      }
    },
  },

  mounted() {
    if (this.autoPlay) {
      this.timer = setInterval(() => {
        this.nextImage()
      }, this.autoPlayTime)
    }
  },

  methods: {
    showImage(index) {
      document.addEventListener('keydown', this.addKeyEvent)
      this.$set(this, 'lightBoxOn', true)
      this.$set(this, 'select', index)
    },

    addKeyEvent(event) {
      if (event.keyCode === 37) this.previousImage() // left arrow
      if (event.keyCode === 39) this.nextImage() // right arrow
      if (event.keyCode === 27) this.closeLightBox() // esc
    },

    closeLightBox() {
      this.$set(this, 'lightBoxOn', false)
      document.removeEventListener('keydown', this.addKeyEvent)
    },

    nextImage() {
      this.$set(this, 'select', (this.select + 1) % this.images.length)
    },

    previousImage() {
      this.$set(this, 'select', ((this.select - 1) + this.images.length) % this.images.length)
    },
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.addKeyEvent)

    if (this.autoPlay) {
      clearInterval(this.timer)
    }
  },
}
