///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>


class Controller {


    boardMessage : string;


    constructor($scope : angular.IScope, header: ViewValue.Header) {
        $scope["self"] = this;

        header.title = "Board";

        this.boardMessage = "Board Message";
    }
}


define(require => {

    var mod : angular.IModule = require('theMainModule');

    mod["registerController"]('BoardController',['$scope', 'singletonHeader', Controller]);

})