/// <reference path="./typings/node/node.d.ts"/>
/// <reference path="./typings/express/express.d.ts"/>
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
app.use('/lib/requirejs', express.static(path.join(__dirname, 'node_modules', 'requirejs')));
app.use('/lib/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.use('/lib/angular', express.static(path.join(__dirname, 'node_modules', 'angular')));
app.use('/lib/angular-ui-router', express.static(path.join(__dirname, 'node_modules', 'angular-ui-router', 'release')));
app.use('/lib/angular-resource', express.static(path.join(__dirname, 'node_modules', 'angular-resource')));
app.use('/other', express.static(path.join(__dirname, 'other')));
app.use('/', express.static(path.join(__dirname, 'public')));
// http://stackoverflow.com/questions/15987451/express-and-url-rewriting-html5-history
app.all('*', function (req, res) {
    res.sendfile('index.html', { root: path.join(__dirname, '/public') });
});
//catch404andforwardtoerrorhandler
app.use(function (req, res, next) {
    // var err=new Error('NotFound');
    //err.status=404;//TODO:return
    // next(err);
});
//errorhandlers
//developmenterrorhandler
//willprintstacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
//productionerrorhandler
//nostacktracesleakedtouser
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map