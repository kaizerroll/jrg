'use strict'

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

module.exports = function (app) {

  // Capture them cookies
  // Must be done before any session middleware
  app.use(cookieParser())

  // Parse out POST and PUT bodies
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

}
