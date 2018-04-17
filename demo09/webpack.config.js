var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    devFlagPlugin,
    new UglifyJsPlugin()
  ]
};
