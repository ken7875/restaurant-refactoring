const Restaurant = require('../restaurant')
const restaurantRes = require('../../restaurant.json')
const db = require('./config/mongoose')

db.once('open', () => {
  restaurantRes.results.forEach(restaurant => {
    Restaurant.create({
      name: restaurant.name,
      name_en: restaurant.name_en,
      image: restaurant.image,
      category: restaurant.category,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description
    })
  })
  console.log('done')
})
