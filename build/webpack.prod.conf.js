var webpack = require('webpack')
var config = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin');


// naming output files with hashes for better caching.
// dist/index.html will be auto-generated with correct URLs.
config.target = 'node'
config.output.filename = 'vue-image-lightbox.min.js'
config.output.libraryTarget = 'commonjs2'

// config.entry = './src/main.js'
config.entry = './src/components/Lightbox.vue'

// whether to generate source map for production files.
// disabling this can speed up the build.
var SOURCE_MAP = true

config.devtool = SOURCE_MAP ? 'source-map' : false

config.vue = {
  loaders: {
    css: ExtractTextPlugin.extract("css"),
  }
},

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),

  new ExtractTextPlugin("vue-image-lightbox.min.css"),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),

  new webpack.optimize.OccurenceOrderPlugin()
])

console.log(config)
module.exports = config