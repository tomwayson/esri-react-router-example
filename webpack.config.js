module.exports = {
  entry: ['whatwg-fetch', './index.js'],

  output: {
    path: 'dist',
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
