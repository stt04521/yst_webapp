var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.0.12:9000"',
  apiServerAddress: '"http://192.168.0.12:9000"',
  pomeloServerAddress: '"192.168.0.12"'
  // apiServerAddress: '"http://192.168.0.188:9000"'
})


