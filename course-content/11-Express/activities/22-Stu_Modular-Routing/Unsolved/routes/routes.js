var express = require('express')
var router = express.Router()
var feedback = require('./feedback')
var tips = require('./feedback')

var feedback = require('./feedbackRouter');
var tips = require('./tipsRouter');

app.use("/feedbackRouter", feedback);
app.use("/tipsRouter", tips);

module.exports = router