var flight = require('./index');


var f = flight({
    number : 234,
    origin : 'LON',
    destination : 'PAK'
});

f.triggerDepart();
f.triggerArrival();
console.log(f.getinfo());


/*var flight = require('./index');

flight.setNumber(234);
flight.setOrigin('LON');
flight.setDestination('PAK');

console.log(flight.getInfo());
*/