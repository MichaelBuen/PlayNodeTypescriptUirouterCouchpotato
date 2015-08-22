///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>




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





class Controller {

    sampleMessage : string;

    constructor($scope : angular.IScope) {
        $scope["self"] = this;
        this.sampleMessage = "Welcome";
    }
}


define(['theApp'], function (app) {
    app.registerController('WelcomeController',['$scope',Controller]);
});

