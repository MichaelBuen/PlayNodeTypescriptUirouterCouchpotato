/// <reference path="./typings/express/express.d.ts"/>

import express = require('express');

var basicAuth = require('basic-auth');


export class Authorizer {


    static authorize(roles: string[]) : express.RequestHandler {
        var a = new Authorizer(roles);
        return a.authorizeRole.bind(a);
        // return a.authorizeRole;
    }

    constructor(public roles:string[]) {
    }

    getAuthorizerCallback():express.RequestHandler {
        return this.authorizeRole.bind(this);
    }


    private isUserInRole(userName:string):boolean {

        var userRole:string;

        if (userName == "foo") {
            userRole = 'guest';
        }
        else {
            userRole = '';
        }

        var isAllowed:boolean = false;
        for (var i = 0; i < this.roles.length; ++i) {
            if (this.roles[i] == userRole) {
                isAllowed = true
                break;
            }
        }


        console.log("Is allowed " + isAllowed)

        return isAllowed;

    }


    private authorizeRole(req:express.Request, res:express.Response, next:Function):express.RequestHandler {

        function unauthorized(res):express.RequestHandler {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            return res.send(401);
        }


        var user = basicAuth(req);

        if (!user || !user.name || !user.pass) {
            return unauthorized(res);
        }


        if (user.name === 'foo' && user.pass === 'bar') {

            var isAllowed:boolean = this.isUserInRole(user.name);

            console.log("Is allowed " + isAllowed);


            if (isAllowed)
                return next();
            else
                return unauthorized(res);

        } else {
            return unauthorized(res);
        }
    }


}