const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home')
// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', home)

// create router
const restaurants = require('./modules/restaurants')
router.use('/restaurants', restaurants)

// search
const search = require('./modules/search')
router.use('/search', search)

module.exports = router
