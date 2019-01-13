const $ = require('express').Router()
const indexController = require('../controllers/index-controller')

$.use('/', indexController)

module.exports = $
