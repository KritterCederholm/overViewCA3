var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var model = require('./database/model');
var mongo = require('./database/mongo');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//var db = mongoose.connect("mongodb://viewer:testviewer@ds049150.mongolab.com:49150/orderview");

mongo.connect();

model.ProductModel.find(function(err, orderdetails){
/*
    fs.writeFile("./public/OrderHistory", orderdetails, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
    */

    console.log(orderdetails);
    mongo.close();
})

//var person = new model.PersonModel({name:'Naja', age:'27'});

/*
 person.save(function(err,persons) {
 if(err){
 console.log(err);
 } else {
 console.log("Person saved: " + person);
 }
 //mongo.close();
 });
 */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use(function(req,res,next){
    req.db = db;
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;