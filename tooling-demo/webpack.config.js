module.exports = {
  entry: './js/src/App.jsx',
  output: {
    filename: 'js/build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'jsx-loader' // loaders can take parameters as a querystring
      }
    ]
  },
  resolve: {
    moduleDirectories: ['node_modules', 'js/src'],
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#inline-source-map'
};
