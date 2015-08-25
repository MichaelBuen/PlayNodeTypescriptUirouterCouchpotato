///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular.d.ts"/>

///<reference path="../shared/ViewValue/Header.ts"/>


class RouteDefinition
{
    constructor ($stateProvider,$urlRouterProvider,$locationProvider,$couchPotatoProvider) {

        this['$get'] = function() {
            // this is a config-time-only provider
            // in a future sample it will expose runtime information to the app
            return {};
        };

        var theTitleViewObject = {
            controller: ['$scope', 'singletonHeader', function($scope: angular.IAngularStatic, header: ViewValue.Header) {
                $scope["header"] = header;
            }],
            template: "{{header.title}}"
        };

        $stateProvider
            .state('home', {
                url: '/',
                views : {
                    "theMainView": {
                        controller: 'WelcomeController',
                        templateUrl: '/app-dir/Welcome/Template.html',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Welcome/Controller.js'])
                        }
                    },
                    "theTitleView" :  theTitleViewObject
                }

            })
            .state('board', {
                url: '/app/board',
                views: {
                    "theMainView" : {
                        controller: 'BoardController',
                        templateUrl: '/app-dir/Board/Template.html',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Board/Controller.js'])
                        }
                    },
                    "theTitleView" :  theTitleViewObject
                }

            })
            .state('product', {
                url: '/app/product',

                views : {
                    "theMainView": {
                        controller: 'ProductController',
                        templateUrl: '/app-dir/Product/Template.html',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Product/Controller.js'])
                        }
                    },
                    "theSidebarView" : {
                        controller: 'ProductSidebarController',
                        templateUrl: '/app-dir/Product/Sidebar.html',
                        resolve: {
                            dummy: $couchPotatoProvider.resolveDependencies(['/app-dir/Product/SidebarController.js'])
                        }
                    },
                    "theTitleView" :  theTitleViewObject
                }
            });





        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);

    }
}// class RouteDefinition



define(require => {
    var mod: angular.IModule = require('theMainModule');

    mod["registerProvider"]( 'routeDefs',['$stateProvider','$urlRouterProvider','$locationProvider','$couchPotatoProvider', RouteDefinition]);
});