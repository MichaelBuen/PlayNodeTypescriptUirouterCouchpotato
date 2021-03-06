/// <reference path="./typings/express/express.d.ts"/>

import express = require('express');


var basicAuth = require('basic-auth');


export = function authorizeRole(roles: string[]) : express.RequestHandler {
    return authorizeRoleBind.bind(undefined, roles);
}

function authorizeRoleBind(roles: string[], req:express.Request, res:express.Response, next:Function): express.RequestHandler {

    function unauthorized(res) : express.RequestHandler {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
    }


    function isUserInRole(userName:string):boolean {

        var userRole:string;

        if (userName == "foo") {
            userRole = 'guest';
        }
        else {
            userRole = '';
        }

        var isAllowed : boolean = false;
        for(var i = 0; i < roles.length; ++i) {
            if (roles[i] == userRole) {
                isAllowed = true
                break;
            }
        }


        console.log("Is allowed " + isAllowed)

        return isAllowed;

    }


    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }


    if (user.name === 'foo' && user.pass === 'bar') {

        var isAllowed:boolean = isUserInRole(user.name);

        console.log("Is allowed " + isAllowed);


        if (isAllowed)
            return next();
        else
            return unauthorized(res);

    } else {
        return unauthorized(res);
    }
}


