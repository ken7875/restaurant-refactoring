const express = require('express');
const router = express.Router();
const Restaurant = require('../../models/restaurant');

//search
router.get('/', (req, res) => {
    const keywords = req.query.keyword.toLowerCase().trim()
    let noResult = ''
    Restaurant.find()
        .lean()
        .then(restaurants => {
            const result = restaurants.filter(item =>
                item.name.toLowerCase().includes(keywords) || item.category.toLowerCase().includes(keywords)
            )
            console.log(result.length)
            result.length === 0 ? noResult = '無搜尋結果' : noResult = ''
            res.render('index', { restaurants: result, noResult, keywords })
        })
        .catch(err => console.log(err))
})

module.exports = router