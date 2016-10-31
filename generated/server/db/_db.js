'use strict'

const path = require('path')
const Sequelize = require('sequelize')
const env = require('../env')

const options = {}

if (process.env.NODE_ENV === 'testing') {
  options.logging = false
}

const db = new Sequelize(env.DATABASE_URI, options)

module.exports = db

