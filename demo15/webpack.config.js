module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
          test: /(\.jsx|\.js)$/,
          use: {
              loader: "babel-loader"
          },
          exclude: /node_modules/
      },
    ]
  }
};
