/// <reference path="./typings/express/express.d.ts"/>

import express = require('express');


var basicAuth = require('basic-auth');




export function accessedBy(roles: string[]) : express.RequestHandler {
    return accessedByBind.bind(undefined, roles);
}


function accessedByBind(roles: string[], req:express.Request, res:express.Response, next:Function): express.RequestHandler {

    function unauthorized(res) : express.RequestHandler {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
    }


    function isUserInRole(userName:string): boolean {

        var userRole: string;

        if (userName == "foo") {
            userRole = 'guest';
        }
        else {
            userRole = '';
        }

        var isAllowed = false;

        for(var i = 0; i < roles.length; ++i) {
            if (roles[i] == userRole) {
                isAllowed = true;
                break;
            }
        }

        console.log("Is allowed " + isAllowed)

        return isAllowed;

    }


    // === accessedByBind starts here ===


    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }


    if (user.name === 'foo' && user.pass === 'bar') {

        var isAllowed = isUserInRole(user.name);

        console.log("Is allowed " + isAllowed);

        if (isAllowed)
            return next();
        else
            return unauthorized(res);

    } else {
        return unauthorized(res);
    }

}
