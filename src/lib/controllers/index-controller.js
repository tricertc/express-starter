const $ = require('express').Router()

function index(req, res) {
  res.status(200).end()
}

$.get('/', index)

module.exports = $
