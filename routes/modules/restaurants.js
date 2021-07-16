const express = require('express');
const router = express.Router();
const Restaurant = require('../../models/restaurant')

// create
router.get('/new', (req, res) => res.render('new'))

router.post('/', (req, res) => {
    const name = req.body.name
    const name_en = req.body.name_en
    const category = req.body.category
    const phone = req.body.phone
    const location = req.body.location
    const image = req.body.image
    const rating = req.body.rating
    const google_map = req.body.google_map
    const description = req.body.description
    return Restaurant.create({
        name,
        name_en,
        category,
        phone,
        location,
        image,
        rating,
        google_map,
        description
    })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

// edit
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
        .lean()
        .then(restaurant => {
            return res.render('edit', { restaurant })
        })
        .catch(err => console.log(err))
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const { name, name_en, category, phone, location, image, rating, google_map, description } = req.body
    return Restaurant.findById(id)
        .then((restaurant) => {
            restaurant.name = name
            restaurant.name_en = name_en
            restaurant.category = category
            restaurant.phone = phone
            restaurant.location = location
            restaurant.image = image
            restaurant.rating = rating
            restaurant.google_map = google_map
            restaurant.description = description
            console.log(restaurant.description)
            return restaurant.save()
        })
        .then(() => res.redirect(`/restaurants/${id}/detail`))
        .catch(err => console.log(err))
})

// detail
router.get('/:id/detail', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
        .lean()
        .then(restaurant => res.render('detail', { restaurant }))
        .catch(err => console.log(err))
})

// delete
router.delete('/:id', (req, res) => {
    const id = req.params.id
    return Restaurant.findById(id)
        .then(restaurant => restaurant.remove())
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router