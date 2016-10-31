'use strict'

const path = require('path')
const devConfigPath = require('./development.js')
const prodConfigPath = require('./production.js')
const testConfigPath = require('./testing.js')

if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfigPath
} else if (process.env.NODE_ENV === 'testing') {
  module.exports = testConfigPath
} else {
  module.exports = devConfigPath
}
