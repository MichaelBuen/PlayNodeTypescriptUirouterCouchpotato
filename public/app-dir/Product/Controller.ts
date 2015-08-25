///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/Domain/Product.ts"/>


class Controller {

    sampleMessage : string;

    domainProduct : Domain.Product;

    constructor($scope : angular.IScope, domainProduct) {

        console.log("Product's Controller: User of factory/services");


        $scope["self"] = this;
        this.sampleMessage = "Product's sample message";

        // need to re-initialized the properties, so as not to get the previous singleton values
        this.domainProduct = domainProduct;
        this.domainProduct.initialize();

        this.domainProduct.subscribeCallback(selectedId => {
            window.alert(selectedId);
        });
    }

    show() {
        this.sampleMessage = "New Product";
    }
}


define( ['theMainModule'], (mod: angular.IModule) =>  mod["registerController"]('ProductController',['$scope', 'domainProduct', Controller]) );

