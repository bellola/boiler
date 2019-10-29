'use strict'

const {db} = require('./server/db/database')
const app = require('./server/server')
const PORT = 1337

db.sync() 
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  })