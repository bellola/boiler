const express = require('express');
const path = require('path')
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');

app.use(morgan('dev'))



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', require('./api/index.js'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index'))
  }) // Send index.html for any other requests
  
  // error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
  })

  module.exports = app