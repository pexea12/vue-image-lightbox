const webpack = require('webpack')
const config = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

config.output.filename = 'vue-image-lightbox.min.js'
config.output.libraryTarget = 'umd'
config.output.library = 'Lightbox'

config.entry = path.resolve(__dirname, '../src/components/Lightbox.vue')

config.devtool = '#source-map'

config.module.rules.push({
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
  ],
})

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),

  new MiniCssExtractPlugin({
    filename: 'vue-image-lightbox.min.css'
  }),

  new UglifyJSPlugin({
    sourceMap: true,
    
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

  new OptimizeCSSPlugin({
      cssProcessorOptions: {
        options: {
          safe: true
        }
      }
    }),

  new webpack.optimize.OccurrenceOrderPlugin(),
])

module.exports = config
