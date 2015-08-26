///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../shared/ViewValue/Header.ts"/>
var RouteDefinition = (function () {
    function RouteDefinition($stateProvider, $urlRouterProvider, $locationProvider, $couchPotatoProvider) {
        this['$get'] = function () {
            // this is a config-time-only provider
            // in a future sample it will expose runtime information to the app
            return {};
        };
        var theTitleViewObject = {
            controller: ['singletonHeader', function (header) {
                    this["header"] = header;
                }],
            controllerAs: 'h',
            template: "{{h.header.title}}"
        };
        $stateProvider
            .state('home', {
            url: '/',
            views: {
                "theMainView": {
                    controller: 'WelcomeController',
                    controllerAs: 'w',
                    templateUrl: '/app-dir/Welcome/Template.html',
                    resolve: {
                        dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Welcome/Controller.js'])
                    }
                },
                "theTitleView": theTitleViewObject
            }
        })
            .state('board', {
            url: '/app/board',
            views: {
                "theMainView": {
                    controller: 'BoardController',
                    controllerAs: 'b',
                    templateUrl: '/app-dir/Board/Template.html',
                    resolve: {
                        dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Board/Controller.js'])
                    }
                },
                "theTitleView": theTitleViewObject
            }
        })
            .state('product', {
            url: '/app/product',
            views: {
                "theMainView": {
                    controller: 'ProductController',
                    controllerAs: 'p',
                    templateUrl: '/app-dir/Product/Template.html',
                    resolve: {
                        dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Product/Controller.js'])
                    }
                },
                "theSidebarView": {
                    controller: 'ProductSidebarController',
                    controllerAs: 's',
                    templateUrl: '/app-dir/Product/Sidebar.html',
                    resolve: {
                        dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Product/SidebarController.js'])
                    }
                },
                "theTitleView": theTitleViewObject
            }
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
    return RouteDefinition;
})(); // class RouteDefinition
define(function (require) {
    var mod = require('theMainModule');
    mod["registerProvider"]('routeDefs', ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$couchPotatoProvider', RouteDefinition]);
});
//# sourceMappingURL=TheRouteDefs.js.map