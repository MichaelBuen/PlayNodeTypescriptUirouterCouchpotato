///<reference path="../typings/requirejs/require.d.ts"/>

define(['theApp'], function (app) {


    app.registerProvider(
        'routeDefs',
        [
            '$stateProvider',
            '$urlRouterProvider',
            '$locationProvider',
            '$couchPotatoProvider',
            function (
                $stateProvider,
                $urlRouterProvider,
                $locationProvider,
                $couchPotatoProvider
            ) {



                this.$get = function() {
                    // this is a config-time-only provider
                    // in a future sample it will expose runtime information to the app
                    return {};
                };



                $stateProvider
                    .state('home', {
                        url: '/',
                        controller: 'WelcomeController',
                        templateUrl: '/app/Welcome/Template.html',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies(['/app/Welcome/Controller.js'])
                        }
                    })
                    .state('board', {
                        url: '/board',
                        controller: 'BoardController',
                        templateUrl: '/app/Board/Template.html',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies(['/app/Board/Controller.js'])
                        }
                    })
                    .state('product', {
                        url: '/product',
                        controller: 'ProductController',
                        templateUrl: '/app/Product/Template.html',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies(['/app/Product/Controller.js'])
                        }
                    });





                $urlRouterProvider.otherwise('/');

                $locationProvider.html5Mode(true);

            }
        ]
    );
});