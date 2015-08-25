///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>




/*
define(['theApp'], function (app) {
    app.registerController(
        'WelcomeController',
        [
            '$scope', '$state',
            function($scope, $state) {
                $scope.self = { sampleMessage : "No TypeScript" };
            }
        ]
    )
});
*/



module App.Welcome {
    export class Controller {

        sampleMessage : string;

        constructor($scope : angular.IScope, singletonHeader: ViewValue.Header) {
            $scope["self"] = this;

            singletonHeader.title = "Welcome";

            this.sampleMessage = "Welcome";
        }
    }
}




define( ['theMainModule'], (app: angular.IModule) =>
    app["registerController"]('WelcomeController',['$scope', 'singletonHeader', App.Welcome.Controller]) );

