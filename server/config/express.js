'use strict'
const express = require('express')

module.exports = (app, config) => {
  app.set('view engine', 'pug')
  app.set('views', config.rootPath + 'server/views')

  // TODO: add express use
  app.use(express.static('public'))

  console.log(`Express running on port: ${config.port}`)
}
