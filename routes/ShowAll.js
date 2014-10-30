/**
 * Created by Anders on 29-10-2014.
 */
var express = require('express');
var router = express.Router();
var collections = ('orders');
var db = require('mongojs').connect("mongodb://viewer:testviewer@ds049150.mongolab.com:49150/orderview", collections);

var orderArray = [];

db.orders.find(function (err, orders){

    orders.forEach(function(order){
        orderArray.push(order);
    });
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('showall',
        {
           title: 'List of all orders',
           orderArray: orderArray
        });
});

module.exports = router;