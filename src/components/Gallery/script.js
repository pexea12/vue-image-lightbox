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