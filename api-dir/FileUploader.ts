/// <reference path="../typings/express/express.d.ts"/>

import express = require('express');
import fs = require("fs");
import path = require("path");


export function uploadFile(req: express.Express, res: express.Response, next: Function) : express.RequestHandler {

    console.log('see that');
    console.log(req["files"]);

    var file = req["files"]["myFile"];


    console.log('see this');
    console.log(file.name);

    console.log(file.type);


    var appDir = path.dirname(require.main.filename);
    console.log('app dir: ' + appDir);
    var newPath = path.join(appDir, "s.jpg");
    console.log('new path: ' + newPath);


    fs.rename(file.path, newPath, (ex: NodeJS.ErrnoException) => {
        console.log('err: ')
        console.log(ex);
    });

    return null;
}