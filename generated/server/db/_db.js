'use strict'

const Sequelize = require('sequelize')
const env = require('../env')

const options = (process.env.NODE_ENV === 'testing') ? { logging: false } : {}

const db = new Sequelize(env.DATABASE_URI, options)

module.exports = db

