///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>


requirejs.config({
    baseUrl: '/',
    paths: {
        "angular" : "/lib/angular/angular",
        "jquery": "/lib/jquery/jquery",
        "angularUIRouter": "/lib/angular-ui-router/release/angular-ui-router",
        "angularResource" : "/lib/angular-resource/angular-resource",
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


// not defining new module, just use the other defined modules like theMainModule and theMainModuleInit. so use require
require(
    [
        'angular',"theMainModule",

        // Although we can embed the file path of these two require-using modules directly here,
        // we just made an alias requirejs.config above, and use the alias above here.
        // If we embed directly the file path here, IDE will warn that it cannot find the file, especially if using custom route.
        // IDE warnings are annoying.
        'theMainModuleInit', 'theRouteDefs'
    ],

    (angular : angular.IAngularStatic, theMainModule) =>
    {
        angular.element(document).ready(function () {

            angular.bootstrap(document, [theMainModule['name'], function () {

                // for good measure, put ng-app on the html element
                // studiously avoiding jQuery because angularjs.org says we shouldn't
                // use it.  In real life, there are a ton of reasons to use it.
                // karma likes to have ng-app on the html element when using requirejs.
                angular.element(document).find('html').addClass('ng-app');

            }]);

        });
    }
);


