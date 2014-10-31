/**
 * Created by Anders on 31-10-2014.
 */
var express = require('express');
var model = require('../database/model');
var router = express.Router();
var orderById = {};
var detailsById = {};
var total = 0;

router.get('/:id', function(req, res) {
    function sending() {
        res.render('orderDetails',
            {
                title: 'Order Details',
                orderById: orderById,
                detailsById: detailsById,
                total: total
            });
    }

    var requestedId = req.params.id;
    model.OrderModel.find({ _id : requestedId })
        .exec(function (err, order) {
            orderById = order;
        });
    model.DetailsModel.find({ order: requestedId})
        .populate('product')
        .exec(function(err, orderDetails) {
            detailsById = orderDetails;
            detailsById.forEach(function (detail) {
                total = (total + (detail.unitPrice - (detail.unitPrice * detail.discount)) * detail.quantity);
            });
            sending();
        });
    total=0;
});

module.exports = router;