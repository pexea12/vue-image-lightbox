const webpack = require('webpack')
const config = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')


config.devtool = '#source-map'

config.module.rules.push({
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
  ],
})

config.plugins = (config.plugins || []).concat([
  new MiniCssExtractPlugin({
    filename: 'vue-image-lightbox.min.css'
  }),

  new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
        global_defs: {
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        },
      },

      output: {
        comments: false,
      },
    },
  }),

  new OptimizeCSSPlugin({
    cssProcessorOptions: {
      safe: true,
    }
  }),
])

module.exports = config
