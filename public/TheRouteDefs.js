///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
var RouteDefinition = (function () {
    function RouteDefinition($stateProvider, $urlRouterProvider, $locationProvider, $couchPotatoProvider) {
        this['$get'] = function () {
            // this is a config-time-only provider
            // in a future sample it will expose runtime information to the app
            return {};
        };
        $stateProvider
            .state('home', {
            url: '/',
            views: {
                "theMainView": {
                    controller: 'WelcomeController',
                    templateUrl: '/app-dir/Welcome/Template.html',
                    resolve: {
                        dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Welcome/Controller.js'])
                    }
                }
            }
        })
            .state('board', {
            url: '/app/board',
            views: {
                "theMainView": {
                    controller: 'BoardController',
                    templateUrl: '/app-dir/Board/Template.html',
                    resolve: {
                        dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Board/Controller.js'])
                    }
                }
            }
        })
            .state('product', {
            url: '/app/product',
            views: {
                "theMainView": {
                    controller: 'ProductController',
                    templateUrl: '/app-dir/Product/Template.html',
                    resolve: {
                        dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Product/Controller.js'])
                    }
                },
                "theSidebarView": {
                    controller: 'ProductSidebarController',
                    templateUrl: '/app-dir/Product/Sidebar.html',
                    resolve: {
                        dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Product/SidebarController.js'])
                    }
                }
            }
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
    return RouteDefinition;
})(); // class RouteDefinition
define(['theMainModule'], function (app) {
    app["registerProvider"]('routeDefs', ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$couchPotatoProvider', RouteDefinition]);
});
//# sourceMappingURL=TheRouteDefs.js.map