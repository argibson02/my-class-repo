var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  router.get('/', function (req, res) {
    res.send('home page')
  })
  // define the home page route
  router.get('/feedback', function (req, res) {
    res.send('Feedback page')
  })
  module.exports = router