///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
define(['angular', 'angularUIRouter', 'angularResource', 'couchPotato'], function (angular, angularUIRouter, angularResource, couchPotato) {
    var app = angular.module('niceApp', ['ui.router', 'ngResource', 'scs.couch-potato']);
    couchPotato.configureApp(app); // this dynamically adds registerProvider on angular module niceApp
    return app;
});
//# sourceMappingURL=TheApp.js.map