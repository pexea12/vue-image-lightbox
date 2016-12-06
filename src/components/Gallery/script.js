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
    }
  },

  methods: {
    showLightBox(index) {
      this.$set(this, 'select', index)
    }
  }
}