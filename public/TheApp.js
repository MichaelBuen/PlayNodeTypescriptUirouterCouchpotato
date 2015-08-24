///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../shared/Domain/Product.ts"/>
define(['angular', 'angularUIRouter', 'angularResource', 'couchPotato'], function (angular, angularUIRouter, angularResource, couchPotato) {
    var app = angular.module('niceApp', ['ui.router', 'ngResource', 'scs.couch-potato']);
    /*app.factory('theDomainProduct', () => {
        var p = new Domain.Product();
        p.name = "Yo";
        p.yearModel = 1976;
        return p;
    });*/
    app.service('domainProduct', Domain.Product);
    couchPotato.configureApp(app); // this dynamically adds registerProvider on angular module niceApp
    return app;
});
//# sourceMappingURL=TheApp.js.map