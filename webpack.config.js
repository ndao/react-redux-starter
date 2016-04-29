var path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function getStyleLoader () {
  return (process.env.BABEL_ENV === 'production')
    ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    : 'style-loader!css-loader!postcss-loader'
}

module.exports = {
  devServer: {
    contentBase: 'build/'
  },
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PTV',
      template: 'src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('index.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}
