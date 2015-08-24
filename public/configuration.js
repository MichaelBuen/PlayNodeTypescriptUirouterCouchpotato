///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
requirejs.config({
    baseUrl: '/',
    paths: {
        "angular": "/lib/angular/angular",
        "jquery": "/lib/jquery/jquery",
        "angularUIRouter": "/lib/angular-ui-router/release/angular-ui-router",
        "angularResource": "/lib/angular-resource/angular-resource",
        "couchPotato": "/other/couchPotato",
        "theApp": "/TheApp",
        "theAppInit": "/TheAppInit",
        "theRouteDefs": "/TheRouteDefs"
    },
    shim: {
        "angular": {
            "exports": "angular"
        },
        "theApp": {
            deps: ["angular"]
        }
    }
});
require(['angular', 'theApp', 'theAppInit',
    '/shared/Domain/Product.js'
], function (angular, app) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [app['name'], function () {
                // for good measure, put ng-app on the html element
                // studiously avoiding jQuery because angularjs.org says we shouldn't
                // use it.  In real life, there are a ton of reasons to use it.
                // karma likes to have ng-app on the html element when using requirejs.
                angular.element(document).find('html').addClass('ng-app');
            }]);
    });
});
//# sourceMappingURL=configuration.js.map