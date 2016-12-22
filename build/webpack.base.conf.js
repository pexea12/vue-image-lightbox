var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      components: path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}