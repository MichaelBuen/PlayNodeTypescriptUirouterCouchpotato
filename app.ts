/// <reference path="./typings/node/node.d.ts"/>
/// <reference path="./typings/express/express.d.ts"/>

import express = require('express');
import path = require('path');

import canBe = require('./CanBe');


var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();


var FileUploader = require('./api-dir/FileUploader');



var app = express();


app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');


app.use('/', express.static( path.join(__dirname, 'public') ));
app.use('/lib', express.static(path.join(__dirname, 'browser-lib', 'node_modules')));
app.use('/lib-other', express.static(path.join(__dirname, 'browser-lib', 'other')));
app.use('/shared', express.static(path.join(__dirname, 'shared')));


app.get('/api/something', canBe.accessedBy(['guest']),  (req: express.Request, res: express.Response, next: Function) => {
    res.json({message: 'Mensaje', description: 'Yeah!'});
});


app.post('/api/photo', multipartyMiddleware, FileUploader.uploadFile);



//catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: Function) => {

    // http://stackoverflow.com/questions/15987451/express-and-url-rewriting-html5-history
    // if the first path of the url is app
    if(req.url.indexOf('/app/') == 0) {
        res.sendFile('index.html', { root: path.join(__dirname, '/public') });
    }
    else {
        var err=new Error('NotFound');
        // err.status=404;// compiler error
        err["status"] = 404;
        next(err);
    }

});



//error handlers

//development error handler
//will print stack trace
if(app.get('env')==='development'){
    app.use((err,req,res : express.Response,next) => {
        res.status(err.status||500);
        res.render('error',{
          message:err.message,
          error:err
        });
    });
}

//production error handler
//no stack traces leaked to user
app.use((err,req,res : express.Response,next) => {
    res.status(err.status||500);
    res.render('error',{
        message:err.message,
        error:{}
    });
});


module.exports = app;
