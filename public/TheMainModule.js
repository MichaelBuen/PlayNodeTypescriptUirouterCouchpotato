///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../shared/Domain/Product.ts"/>
// defining new module (presence of statement: return app;). use define
define(function (require) {
    var angular = require('angular');
    var angularUIRouter = require('angularUIRouter');
    var angularResource = require('angularResource');
    var couchPotato = require('couchPotato');
    require('/shared/Domain/Product.js');
    var mod = angular.module('niceApp', ['ui.router', 'ngResource', 'scs.couch-potato']);
    var useService = true;
    if (useService)
        mod.service('singletonProduct', Domain.Product);
    else
        mod.factory('singletonProduct', function () {
            console.log('Factory');
            return new Domain.Product();
        });
    couchPotato.configureApp(mod);
    return mod;
});
//# sourceMappingURL=TheMainModule.js.map