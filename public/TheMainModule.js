///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../shared/Domain/Product.ts"/>
///<reference path="../shared/ViewValue/Header.ts"/>
// defining new module (presence of statement: return app;). use define
define(function (require) {
    var angular = require('angular');
    var angularUIRouter = require('angularUIRouter');
    var angularResource = require('angularResource');
    var ngFileUpload = require('ngFileUpload');
    var couchPotato = require('couchPotato');
    require('/shared/Domain/Product.js');
    require('/shared/ViewValue/Header.js');
    var mod = angular.module('niceApp', ['ui.router', 'ngResource', 'scs.couch-potato', 'ngFileUpload']);
    var useService = true;
    var umds = require('/shared/Domain/SampleUmd.js');
    if (useService) {
        mod.service('singletonProduct', Domain.Product);
        mod.service('singletonHeader', ViewValue.Header);
        mod.service('UmdService', umds.SampleUmd);
    }
    else
        mod.factory('singletonProduct', function () {
            console.log('Factory');
            return new Domain.Product();
        });
    couchPotato.configureApp(mod);
    return mod;
});
//# sourceMappingURL=TheMainModule.js.map