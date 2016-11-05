'use strict'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = config => {
  mongoose.connect(config.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) console.error(err)
    else console.log('Mongo running')
  })
  db.on('error', err => console.error(err))

  // TODO: require models
}
