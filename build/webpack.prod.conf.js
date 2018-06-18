const webpack = require('webpack')
const config = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


config.devtool = '#source-map'

config.module.rules.push({
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
  ],
})

config.plugins = (config.plugins || []).concat([
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/index.html'),
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    },
  }),

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
