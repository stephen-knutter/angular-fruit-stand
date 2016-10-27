var express = require('express');
var router = express.Router();

var products = require('../model/products.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  products.getAllProducts().then(function(data) {
    res.json(data);
  })
  .catch(function(err) {
    next(err);
  })
});

module.exports = router;
