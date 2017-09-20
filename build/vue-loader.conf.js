var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('postcss-plugin-px2rem')({
      rootValue: 37.5,
      selectorBlackList: ['html'],
      mediaQuery: true,
      propBlackList: ['font-size']
    }),
    require('autoprefixer')({
      browsers: ['iOS >= 7', 'Android >= 4.1']
    })
  ]
}
