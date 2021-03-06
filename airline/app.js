
/**
 * Module dependencies.
 */

module.exports = function (flights) {

    var express = require('express');
    var routes = require('./routes')(flights);
    var path = require('path');

    var app = express();

// all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(function (req,res,next) {
        res.set('X-Powered-By', 'HAK');
        next();
    });
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

// development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    app.get('/flight/:number', routes.flight);
    app.put('/flight/arrive/:number', routes.arrive);
    app.put('/flight/depart/:number',routes.depart);
    app.get('/list', routes.list);

    return app;
};