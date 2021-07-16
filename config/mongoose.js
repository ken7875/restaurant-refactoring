const mongoose = require('mongoose')
const db = mongoose.connection
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
// mongodb連線
db.once('open', () => {
  console.log('mongodb connect')
})
db.on('error', () => {
  console.log('connect error!')
})

module.exports = db
