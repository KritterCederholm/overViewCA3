var mongoose = require('mongoose');

module.exports.connect = function(){
    //mongoose.connect("mongodb://localhost/test");
    mongoose.connect("mongodb://viewer:testviewer@ds049150.mongolab.com:49150/orderview");
    mongoose.connection.once('open', function(){
        console.log("Connected");
    });
}

module.exports.close = function(){
    mongoose.connection.close();
    console.log("Connection closed");
}