'use strict'
const express = require('express')
const app = express()

const env = process.env.NODE_ENV || 'development'
const config = require('./server/config/config')[env]

app.get('/', (req, res) => {
  res.send('RUNS')
})

app.listen(config.port)
console.log(`Express listening on port: ${config.port}`)
