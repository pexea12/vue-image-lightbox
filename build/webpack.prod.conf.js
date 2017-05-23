const webpack = require('webpack')
const config = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

config.output.filename = 'vue-image-lightbox.min.js'

config.entry = path.resolve(__dirname, '../src/components/Lightbox.vue')

config.devtool = '#source-map'

config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader",
  }),
})

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),

  new ExtractTextPlugin({
    filename: 'vue-image-lightbox.min.css',
  }),

  new UglifyJSPlugin({
    compress: {
      warnings: false,
      drop_debugger: true,
      drop_console: true,
      screw_ie8: true,
      global_defs: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    },

    mangle: {
      screw_ie8: true,
    },

    output: {
      comments: false,
      screw_ie8: true,
    }
  }),

  new webpack.optimize.OccurrenceOrderPlugin(),
])

module.exports = config