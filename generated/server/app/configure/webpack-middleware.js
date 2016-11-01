'use strict'

module.exports = app => {

  if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const config = require('../../../webpack.dev.config.js')
    const compiler = webpack(config)

    app.use(webpackHotMiddleware(compiler))
    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }))
  }

}
