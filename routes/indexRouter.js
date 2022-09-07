const express = require('express')
const route = express.Router();
const indexController = require('../controllers/indexController')


route.get('/', indexController.main)

module.exports = route;


