export default {
  props: {
    images: {
      type: Array,
      required: true,
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
      select: 0,
      lightBoxOn: false,
      countImages: this.images.length,
    }
  },

  methods: {
    showImage(index) {
      this.$set(this, 'select', index)
    },

    closeLightBox() {
      this.lightBoxOn = false
    },

    nextImage() {
      this.$set(this, 'select', (this.select + 1) % countImages)
    },

    previousImage() {
      this.$set(this, 'select', ((this.select - 1) + countImages) % countImages)
    }
  }
}