///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>


class Controller {


    boardMessage : string;

    constructor($scope : angular.IScope) {
        $scope["self"] = this;
        this.boardMessage = "Board Message";
    }
}


define( ['theMainModule'], (mod: angular.IModule) =>  mod["registerController"]('BoardController',['$scope',Controller]) );

