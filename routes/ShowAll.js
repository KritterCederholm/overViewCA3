/**
 * Created by Anders on 29-10-2014.
 */
var express = require('express');
var router = express.Router();
var model = require('../database/model');
var orderArray = [];

model.OrderModel.find().sort({'orderDate':1})
    .exec(function (err, orders) {

        orders.forEach(function (order) {
            orderArray.push(order);
        });
    });

/* GET home page. */
router.get('/', function(req, res) {
    res.render('showAll', {
            title: 'all orders',
            orderArray: orderArray
        });
});

module.exports = router;