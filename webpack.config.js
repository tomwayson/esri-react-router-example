module.exports = {
  entry: ['whatwg-fetch', './index.js'],

  output: {
    path: 'dist',
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      // NOTE: excluding esri-loader when npm linked
      { test: /\.js$/, exclude: /(node_modules|esri-loader)/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
