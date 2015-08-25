///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/Domain/Product.ts"/>
///<reference path="../../../shared/Domain/Person.ts"/>





class Controller {

    sampleMessage : string;

    product : Domain.Product;

    person : Domain.Person;

    constructor($scope : angular.IScope, singletonProduct) {

        console.log("Product's Controller: User of factory/services");


        $scope["self"] = this;
        this.sampleMessage = "Product's sample message";

        // need to re-initialized the properties, so as not to get the previous singleton values
        this.product = singletonProduct;
        this.product.initialize();

        this.product.subscribeCallback(selectedId => {
            window.alert(selectedId);
        });

        this.person = new Domain.Person(); // won't work without this in define: '/shared/Domain/Person.js'
        this.person.age = 39;
        this.person.name = "Kel";
    }

    show() {
        this.sampleMessage = "New Product";
    }
}


define(
    [
        'theMainModule',
        '/shared/Domain/Person.js'
    ],
    (mod: angular.IModule) =>  mod["registerController"]('ProductController',['$scope', 'singletonProduct', Controller]) );

