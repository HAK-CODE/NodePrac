
/*
 * GET home page.
 */

// Flights are data small db
var flights = require('../data/index');

// flight is object blue print
var flight = require('../Flight/index');

for (var p in flights){
    flights[p] = flight(flights[p]);
}

// See data
//console.log(flights);

exports.flight = function (req, res) {
    var num = req.param('number');
    if (typeof flights[num] === 'undefined'){
        res.status(404).json({status:'Not found.'});
    }
    else{
        res.json(200, flights[num].getinfo());
    }
};

exports.arrive = function (req, res) {
    var num = req.param('number');
    if (typeof flights[num] === 'undefined'){
        res.status(404).json({status:'Not found.'});
    }
    else{
        flights[num].triggerArrival();
        res.status(200).json({status:'Success'});
    }
};

exports.depart = function (req, res) {
    var num = req.param('number');
    if (typeof flights[num] === 'undefined'){
        res.status(404).json({status:'Not Found'});
    }
    else {
        flights[num].triggerDepart();
        res.status(200).json({status:"Success"});
    }
};

/*
exports.flight1 = function (req, res) {
    res.json(200, flights[18].getinfo());
};

exports.flight2 = function (req, res) {
    res.json(200, flights[33].getinfo());
};
*/





