///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>



class Controller {

    sampleMessage : string;

    constructor($scope : angular.IScope) {
        $scope["self"] = this;
        this.sampleMessage = "Product";
    }

    show() {
        this.sampleMessage = "New Product";
    }
}


define(['theApp'], function (app) {
    app.registerController('ProductController',['$scope',Controller]);
});

