///<reference path="../typings/requirejs/require.d.ts"/>
define(['theApp'], function (app) {
    app.registerProvider('routeDefs', [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        '$couchPotatoProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $couchPotatoProvider) {
            this.$get = function () {
                // this is a config-time-only provider
                // in a future sample it will expose runtime information to the app
                return {};
            };
            $stateProvider
                .state('home', {
                url: '/',
                controller: 'WelcomeController',
                templateUrl: '/app-dir/Welcome/Template.html',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Welcome/Controller.js'])
                }
            })
                .state('board', {
                url: '/app/board',
                controller: 'BoardController',
                templateUrl: '/app-dir/Board/Template.html',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Board/Controller.js'])
                }
            })
                .state('product', {
                url: '/app/product',
                controller: 'ProductController',
                templateUrl: '/app-dir/Product/Template.html',
                resolve: {
                    dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Product/Controller.js'])
                }
            });
            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode(true);
        }
    ]);
});
//# sourceMappingURL=TheRouteDefs.js.map