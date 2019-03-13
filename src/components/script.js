let Hammer

if (typeof window !== 'undefined') {
  Hammer = require('hammerjs')
}

require('./style.css')


export default {
  props: {
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
    },

    lengthToLoadMore: {
      type: Number,
      default: 0
    },

    closeText: {
      type: String,
      default: 'Close (Esc)'
    },

    previousText: {
      type: String,
      default: 'Previous',
    },

    nextText: {
      type: String,
      default: 'Next',
    },

    previousThumbText: {
      type: String,
      default: 'Previous'
    },

    nextThumbText: {
      type: String,
      default: 'Next'
    },
  },

  data() {
    return {
      select: this.startAt,
      lightBoxOn: this.showLightBox,
      timer: null,
    }
  },

  computed: {
    thumbIndex() {
      const halfDown = Math.floor(this.nThumbs / 2)

      if (this.select >= halfDown && this.select < this.images.length - halfDown)
        return {
          begin: this.select - halfDown + (1 - this.nThumbs % 2),
          end: this.select + halfDown,
        }

      if (this.select < halfDown)
        return {
          begin: 0,
          end: this.nThumbs - 1,
        }

      return {
        begin: this.images.length - this.nThumbs,
        end: this.images.length - 1,
      }
    },

    imagesThumb() {
      if (this.siteLoading) {
        return this.images.map(({thumb}) => ({
          src: thumb,
          loading: this.siteLoading,
          error: this.siteLoading,
        }))
      }

      return this.images.map(({thumb}) => thumb)
    },
  },

  watch: {
    lightBoxOn(value) {
      if (document != null) {
        this.onToggleLightBox(value)
      }
    },

    select() {
      if (this.select >= this.images.length - this.lengthToLoadMore - 1) 
        this.$emit('onLoad')

      if (this.select === this.images.length - 1) 
        this.$emit('onLastIndex')

      if (this.select === 0) 
        this.$emit('onFirstIndex')

      if (this.select === this.startAt) 
        this.$emit('onStartIndex')
    },
  },

  mounted() {
    if (this.autoPlay) {
      this.timer = setInterval(() => {
        this.nextImage()
      }, this.autoPlayTime)
    }

    this.onToggleLightBox(this.lightBoxOn)

    if (this.$refs.container) {
      const hammer = new Hammer(this.$refs.container)

      hammer.on('swiperight', () => {
        this.previousImage()
      })

      hammer.on('swipeleft', () => {
        this.nextImage()
      })
    }
  },

  methods: {
    onToggleLightBox(value) {
      if (this.disableScroll) {
        document.querySelector('html').classList.toggle('no-scroll', value)
      }

      document.querySelector('body').classList.toggle('vue-lb-open', value)
      this.$emit('onOpened', value)

      if (value) {
        document.addEventListener('keydown', this.addKeyEvent)
      } else {
        document.removeEventListener('keydown', this.addKeyEvent)
      }
    },

    showImage(index) {
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
    },

    nextImage() {
      this.$set(this, 'select', (this.select + 1) % this.images.length)
    },

    previousImage() {
      this.$set(this, 'select', (this.select + this.images.length - 1) % this.images.length)
    },
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.addKeyEvent)

    if (this.autoPlay) {
      clearInterval(this.timer)
    }
  },
}
