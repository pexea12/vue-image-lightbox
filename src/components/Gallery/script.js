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

    autoPlay: {
      type: Boolean, 
      default: false,
    },

    autoPlayTime: {
      type: Number,
      default: 3000,
    },
  },

  data() {
    return {
      select: this.startAt,
      thumbSelect: this.startAt,
      lightBoxOn: this.showLightBox,
      countImages: this.images.length,

      timer: null,
    }
  },

  mounted() {
    let self = this
    document.onkeydown = (event) => {
      event = event || window.event
 
      if (event.keyCode === 37) self.previousImage()
      if (event.keyCode === 39) self.nextImage()
      if (event.keyCode === 27) self.closeLightBox()
    }

    if (this.autoPlay) {
      setInterval(() => {
        this.nextImage()
      }, this.autoPlayTime)
    }
  },

  computed: {
    displayThumbs() {
      let halfDown = Math.floor(this.nThumbs / 2)
      let mod = 1 - (this.nThumbs % 2)

      if (this.select <= halfDown) {
        this.thumbSelect = this.select
        return this.images.slice(0, this.nThumbs)
      }

      if (this.select >= this.countImages - halfDown) {
        this.thumbSelect = this.nThumbs - (this.countImages - this.select)
        return this.images.slice(-this.nThumbs)
      }

      this.thumbSelect = halfDown - mod
      return this.images.slice(this.select - halfDown + mod, this.select + halfDown + 1)
    }
  },

  methods: {
    showImage(index) {
      this.$set(this, 'lightBoxOn', true)
      this.$set(this, 'select', index)
    },

    closeLightBox() {
      this.$set(this, 'lightBoxOn', false)
    },

    nextImage() {
      this.$set(this, 'select', (this.select + 1) % this.countImages)
    },

    previousImage() {
      this.$set(this, 'select', ((this.select - 1) + this.countImages) % this.countImages)
    }
  }
}