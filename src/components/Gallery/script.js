export default {
  props: {
    images: {
      type: Array,
      required: true,
    },

    show: {
      type: Boolean,
      default: true,
    },

    startAt: {
      type: Number,
      default: 0,
    },

    comment: {
      type: Boolean,
      default: false,
    },

    thumbnail: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      select: this.startAt,
      lightBoxOn: this.show,
      countImages: this.images.length,
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
      this.$set(this, 
'select', ((this.select - 1) + this.countImages) % this.countImages)
    }
  }
}