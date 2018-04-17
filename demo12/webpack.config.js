var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules:[
      {
          test: /(\.jsx|\.js)$/,
          use: {
              loader: "babel-loader"
          },
          exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js')
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "commons",
    //   // (the commons chunk name)

    //   filename: "commons.js",
    //   // (the filename of the commons chunk)
    // })
  ]
}
