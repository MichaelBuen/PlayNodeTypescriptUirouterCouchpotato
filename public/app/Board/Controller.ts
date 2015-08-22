///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>





class Controller {


    boardMessage : string;

    constructor($scope : angular.IScope) {
        $scope["self"] = this;
        this.boardMessage = "Board z Message";
    }
}


define(['theApp'], function (app) {
    app.registerController('BoardController',['$scope',Controller]);
});

