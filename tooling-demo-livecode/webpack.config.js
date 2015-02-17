module.exports = {
  entry: './js/src/App.jsx',
  output: {
    filename: 'js/build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader'
      }
    ]
  },
  resolve: {
    moduleDirectories: ['node_modules', 'js/src'],
    extensions: ['', '.js', '.jsx']
  },
  devtool: '#inline-source-map'
};
