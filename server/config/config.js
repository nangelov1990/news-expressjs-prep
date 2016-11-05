'use strict'
const path = require('path')
const rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath,
    db: 'mongodb://localhost:27017/news-expressjs-examprep',
    port: 2993
    // TODO: sessionSecret:
  }
}
