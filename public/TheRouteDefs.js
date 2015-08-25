///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>
///<reference path="../shared/ViewValue/Header.ts"/>
var HeaderController = (function () {
    function HeaderController($scope, singletonHeader) {
        $scope['self'] = this;
        this.header = singletonHeader;
    }
    return HeaderController;
})();
var RouteDefinition = (function () {
    function RouteDefinition($stateProvider, $urlRouterProvider, $locationProvider, $couchPotatoProvider) {
        this.titleHtml = "{{self.header.title}}";
        this['$get'] = function () {
            // this is a config-time-only provider
            // in a future sample it will expose runtime information to the app
            return {};
        };
        var titleViewObject = {
            controller: ['$scope', 'singletonHeader', HeaderController],
            template: this.titleHtml
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
                },
                "theTitleView": titleViewObject
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
                },
                "theTitleView": titleViewObject
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
                },
                "theTitleView": titleViewObject
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