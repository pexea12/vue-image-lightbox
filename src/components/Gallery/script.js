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