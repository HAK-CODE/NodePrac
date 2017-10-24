
/*
 * GET home page.
 */

var FlightSchema = require('../schema/flight');

module.exports = function (flights) {

    // flight is object blue print
    var flight = require('../Flight/index');

    for (var p in flights) {
        flights[p] = flight(flights[p]);
    }

    // See data
    //console.log(flights);

    var functions = {};
    functions.flight = function (req, res) {
        var num = req.param('number');
        if (typeof flights[num] === 'undefined') {
            res.status(404).json({status: 'Not found.'});
        }
        else {
            res.json(200, flights[num].getinfo());
        }
    };

    functions.arrive = function (req, res) {
        var num = req.param('number');
        if (typeof flights[num] === 'undefined') {
            res.status(404).json({status: 'Not found.'});
        }
        else {
            flights[num].triggerArrival();

            var record = new FlightSchema(flights[num].getinfo());
            record.save(function (err) {
                if (err)
                {
                    console.log("Error");
                }
                else{
                    console.log("Success data saved.");
                }
            });

            res.status(200).json({status: 'Success'});
        }
    };

    functions.depart = function (req, res) {
        var num = req.param('number');
        if (typeof flights[num] === 'undefined') {
            res.status(404).json({status: 'Not Found'});
        }
        else {
            flights[num].triggerDepart();
            res.status(200).json({status: "Success"});
        }
    };

    functions.list = function (req, res) {
        res.render('list', {title: "AIRLINE", flights: flights});
    };

    return functions;
};


/*
exports.flight1 = function (req, res) {
    res.json(200, flights[18].getinfo());
};

exports.flight2 = function (req, res) {
    res.json(200, flights[33].getinfo());
};
*/





