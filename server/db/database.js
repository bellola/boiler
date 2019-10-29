'use strict'




const Sequelize = require('sequelize')
const pkg = require('../../package.json')


// create the database instance that can be used in other database files
const db = new Sequelize(`postgres://localhost1337/${pkg.name}`, {
  logging: false // so we don't see all the SQL queries getting made
})

module.exports = db