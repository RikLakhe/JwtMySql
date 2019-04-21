var express = require('express')
var router = express.Router()
var db = require('./database')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
  var post = { from: 'me', to: 'you', msg: 'hi' }
  db.query('INSERT INTO messages SET ?', post, function (err, result) {
    if (err) throw err
  })
})

module.exports = router
