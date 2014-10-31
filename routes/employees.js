/**
 * Created by Anders on 31-10-2014.
 */
var model = require('../database/model');
var express = require('express');
var router = express.Router();
var orderById = {};

router.get('/:firstName', function(req, res) {
    function sending() {
        res.render('employees',
            {
                title: 'employee list',
                orderById: orderById
            });
    }

    var requestedId = req.params.id;
    model.EmployeeModel.find({ _id : requestedId })
        .exec(function (err, order) {
            orderById = order;
        });
});

module.exports = router;