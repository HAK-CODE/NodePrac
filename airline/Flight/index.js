var Flight = function () {
    this.data = {
        number: null,
        origin: null,
        destination: null,
        arrives: null,
        departs: null,
        actualArrival: null,
        actualDepart: null
    };

    this.fill = function (info) {
        for(var p in this.data){
            if (this.data[p] !== 'undefined'){
                this.data[p] = info[p];
            }
        }
    };

    this.triggerArrival = function () {
        this.data.actualArrival = new Date();
    };

    this.triggerDepart = function () {
        this.data.actualDepart = new Date();
    };

    this.getinfo = function () {
        return this.data;
    };
};

module.exports = function (info) {
    var instance = new Flight();
    instance.fill(info);
    return instance;
};

/*
module.exports = function (info) {
    var data = {
        number: null,
        origin: null,
        destination: null,
        actualArrival: null,
        actualDepart: null
    };

    for(var p in data){
        if (data[p] !== 'undefined')
        {
            data[p] = info[p];
        }
    }

    var functions = {

        triggerArrival : function() {
            data.actualArrival = new Date();
        },

        triggerDepart : function () {
            data.actualDepart = new Date();
        },

        getInfo : function () {
            return data;
        }
    };
    return functions;
};
*/


/*
var number, origin, destination;

exports.setNumber = function (num) {
    number = num;
};

exports.setOrigin = function (org) {
    origin = org;
};

exports.setDestination = function (dest) {
    destination = dest;
};

exports.getInfo = function () {
    return {
        number: number,
        origin: origin,
        destination: destination
    };
};
*/