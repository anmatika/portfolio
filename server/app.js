var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var i18n = require('i18next');
var flash = require('connect-flash');
var path = require('path');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(flash()); // use connect-flash for flash messages stored in session

i18n.init({ lng: "en-US" });
// i18n.setLng('en-US', function(t) { /* loading done */ });

/**
 * Development Settings
 */
if (app.get('env') === 'development') {

    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));

    // app.all('/*', function(req, res, next) {
    //     // Just send the index.html for other files to support HTML5Mode
    //     res.sendFile('../client/app/index.html', { root: __dirname });
    // });
    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

// add static files serving for server side styles
app.use(express.static(path.join(__dirname, '/styles/css')));

// add static files serving for server side bower_components
app.use(express.static(path.join(__dirname, '/bower_components')));

// add static files serving for server side scripts
app.use(express.static(path.join(__dirname, '/scripts')));



// https_server.listen(PORT);

/**
* Routes
*/
// require('./routes/main')(router);
// app.use(router);

module.exports = app;
