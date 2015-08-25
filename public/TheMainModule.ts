///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>

///<reference path="../shared/Domain/Product.ts"/>


define(['angular', 'angularUIRouter', 'angularResource', 'couchPotato' ],

    (angular: angular.IAngularStatic, angularUIRouter, angularResource, couchPotato) => {

        var app = angular.module('niceApp',['ui.router','ngResource','scs.couch-potato']);


        var useService : boolean = true;

        if (useService)
            app.service('domainProduct', Domain.Product);
        else
            app.factory('domainProduct', () => {
                console.log('Factory');
                return new Domain.Product();
            });


        // this dynamically adds registerProvider and registerController on angular module niceApp (aliased as theMainModule)
        couchPotato.configureApp(app);

        return app;

    }
);