///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/Domain/Product.ts"/>



class Controller {

    sampleMessage : string;

    product : Domain.Product;

    constructor($scope : angular.IScope, singletonProduct) {

        console.log("Product's Sidebar Controller: User of factory/services");

        $scope["self"] = this;
        this.sampleMessage = "Product's sample message";

        this.product = singletonProduct;
    }

    show() {
        this.sampleMessage = "New Product";


    }
}


define(require => {

    var mod: angular.IModule = require('theMainModule');

    mod["registerController"]('ProductSidebarController',['$scope', 'singletonProduct', Controller]);

});