
window.cf = window.cf || {}
window.cf.gVar = window.cf.gVar  || {}
jQuery.ajax({
    type: "GET",
    url: '/OrderHistory.json',
    async: false,
    cache: false,
    success: function (results) { // for loop ?
        window.cf.gVar.json = results;
    },
    error: function (result) {
       // window.cf.gVar.json = JSON.parse('[{"id":"123", "Date":"2014-05-22", "Name":"Tanja", "Address":"Somewhere", "Required":"2014-04-19", "Shipped":"2014-05-22", "City":"Slangerup", "Zip":"3550", "Country":"Denmark", "Lines" : [{"ProductID":"22354", "Product":"Hairband", "UnitPrice":"0.75", "Quantity":"200", "Discount":"0.25", "Price":"125"}],"Total" : "1000" }]');
    },
    complete: function (result) {
        window.cf.fn.ViewChange.List();
    }
});




