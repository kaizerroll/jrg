'use strict'

const nodePath = require('path')
const addAppVariables = require('./app-variables')
const addStaticMiddlware = require('./static-middleware')
const addParsingMiddlware = require('./parsing-middleware')
const addWebpackMiddleware = require('./webpack-middleware')
const addAuthentication = require('./authentication')

module.exports = function (app, db) {

  // setValue and getValue are alias
  // for app.set and app.get used in the less
  // common way of setting application variables
  app.setValue = app.set.bind(app)

  app.getValue = path => app.get(path)

  // Adding configurations
  addWebpackMiddleware(app)
  addAppVariables(app)
  addStaticMiddlware(app)
  addParsingMiddlware(app)

  // Logging middleware, set as application
  // variable inside of server/app/configure/app-variables.js
  app.use(app.getValue('log'))

  addAuthentication(app, db)

}

