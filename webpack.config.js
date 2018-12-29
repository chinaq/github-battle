var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }, // convert modern js files to browser js
      { test: /\.css$/, use: ['style-loader', 'css-loader' ]} // css: import or require xxx.css, style: add a <style> tag
      // // in package.json file
      // "babel": {
      //   "presets": [
      //     "@babel/preset-env",    // model js to browser js
      //     "@babel/preset-react"   // react js to browser js
      //   ]
      // },
    ]
  },
  // mode: 'development',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'  // create an index.html file
    })
  ]
}