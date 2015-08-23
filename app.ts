/// <reference path="./typings/node/node.d.ts"/>
/// <reference path="./typings/express/express.d.ts"/>

import express = require('express');
import path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');


app.use('/', express.static( path.join(__dirname, 'public') ));
app.use('/lib',express.static(path.join(__dirname, 'browser', 'node_modules')));
app.use('/other',express.static(path.join(__dirname,'other')));


//catch 404 and forward to error handler
app.use((req: express.Request,res: express.Response,next) => {

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




//errorhandlers

//developmenterrorhandler
//willprintstacktrace
if(app.get('env')==='development'){
    app.use((err,req,res : express.Response,next) => {
        res.status(err.status||500);
        res.render('error',{
          message:err.message,
          error:err
        });
    });
}

//productionerrorhandler
//nostacktracesleakedtouser
app.use((err,req,res : express.Response,next) => {
    res.status(err.status||500);
    res.render('error',{
        message:err.message,
        error:{}
    });
});


module.exports = app;
