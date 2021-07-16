const express = require('express')
const router = express.Router()

// 引用 Todo model
const Restaurant = require('../../models/restaurant.js')

// home
router.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(err => console.log(err))
})

module.exports = router
