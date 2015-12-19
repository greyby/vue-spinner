var config = require('./webpack.config.js')

config.entry = {
  'vue-spinner': './src/index.js',
}

config.output = {

  filename: './dist/[name].js',
  library: 'VueSpinner',
  libraryTarget: 'umd'
}


module.exports = config
