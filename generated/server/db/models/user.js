'use strict'

const crypto = require('crypto')
const _omit = require('lodash/omit')
const Sequelize = require('sequelize')
const db = require('../_db')

const definitions = {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  }
}

const methods = {
  instanceMethods: {
    sanitize: function () {
      return _omit(this.toJSON(), ['password', 'salt'])
    },
    correctPassword: function (testPassword) {
      return this.Model.encryptPassword(testPassword, this.salt) === this.password
    }
  },
  classMethods: {
    generateSalt: function () {
      return crypto.randomBytes(16).toString('base64')
    },
    encryptPassword: function (plainText, salt) {
      const hash = crypto.createHash('sha1')
      hash.update(plainText)
      hash.update(salt)
      return hash.digest('hex')
    }
  },
  hooks: {
    beforeValidate: function (user) {
      if (user.changed('password')) {
        user.salt = user.Model.generateSalt()
        user.password = user.Model.encryptPassword(user.password, user.salt)
      }
    }
  }
}

module.exports = db.define('user', definitions, methods)
