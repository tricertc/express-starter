const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(require('./lib/config/routes'))

module.exports = app
