///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/Domain/Product.ts"/>



class Controller {

    sampleMessage : string;

    domainProduct : Domain.Product;

    constructor($scope : angular.IScope, domainProduct) {

        console.log("Product's Sidebar Controller: User of factory/services");

        $scope["self"] = this;
        this.sampleMessage = "Product's sample message";

        this.domainProduct = domainProduct;
    }

    show() {
        this.sampleMessage = "New Product";


    }
}


define( ['theMainModule'], (mod: angular.IModule) => mod["registerController"]('ProductSidebarController',['$scope', 'domainProduct', Controller]) );

