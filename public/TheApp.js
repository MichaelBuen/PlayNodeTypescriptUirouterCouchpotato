///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../shared/Domain/Product.ts"/>
define(['angular', 'angularUIRouter', 'angularResource', 'couchPotato'], function (angular, angularUIRouter, angularResource, couchPotato) {
    var app = angular.module('niceApp', ['ui.router', 'ngResource', 'scs.couch-potato']);
    app.service('domainProduct', Domain.Product);
    //app.factory('domainProduct', () => {
    //    console.log('Factory');
    //    return new Domain.Product();
    //});
    couchPotato.configureApp(app); // this dynamically adds registerProvider on angular module niceApp
    return app;
});
//# sourceMappingURL=TheApp.js.map