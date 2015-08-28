///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>


requirejs.config({
    baseUrl: '/',
    paths: {
        "angular" : "/lib/angular/angular",
        "jquery": "/lib/jquery/jquery",
        "angularUIRouter": "/lib/angular-ui-router/release/angular-ui-router",
        "angularResource" : "/lib/angular-resource/angular-resource",
        "ngFileUpload" : "/lib/ng-file-upload/dist/ng-file-upload",

        "couchPotato" : "/other/couchPotato",

        "theMainModule" : "/TheMainModule",
        "theMainModuleInit" : "/TheMainModuleInit",
        "theRouteDefs" : "/TheRouteDefs"
    },

    shim: {
        "angular" : {
            "exports": "angular"
        },

        "theMainModule" : {
            deps: ["angular"]
        }

    }
});



define(require => {
    var angular : angular.IAngularStatic = require('angular');
    var mod: angular.IModule = require('theMainModule');
    require('theMainModuleInit');
    require('theRouteDefs');

    // mod['name'] is 'niceApp'
    angular.element(document).ready(() =>
    {
        // to prevent compiler complaining that array type mismatches string[]
        var arr = [];
        arr.push(mod['name']);
        arr.push(()  =>
        {
            // for good measure, put ng-app on the html element
            // studiously avoiding jQuery because angularjs.org says we shouldn't
            // use it.  In real life, there are a ton of reasons to use it.
            // karma likes to have ng-app on the html element when using requirejs.

            angular.element(document).find('html').addClass('ng-app');
        });
        angular.bootstrap(document, arr);

    })//ready

});
