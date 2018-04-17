var HtmlwebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html'
            // template: __dirname + "/index.tmpl"
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ]
};