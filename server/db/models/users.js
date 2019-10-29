const Sequelize = require('sequelize');
const db = require('../database')





moduke.exports = db.define('postgres://localhost:5432/users', {
  type: Sequelize.STRING,
  allowNull: false,
  dialect: "postgres"

});

module.exports = db;