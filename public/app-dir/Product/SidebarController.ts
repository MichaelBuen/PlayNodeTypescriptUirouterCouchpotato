///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/Domain/Product.ts"/>

//<reference path="../../../shared/ViewValue/Header.ts"/>


module App.Product {
    export class SidebarController {

        sampleMessage : string;


        constructor(public product: Domain.Product) {

            console.log("Product's Sidebar Controller: User of factory/services");

            this.sampleMessage = "Product's sidebar sample message";
        }

        show() {
            this.sampleMessage = "New Product";
        }
    }

}



define(require => {

    var mod: angular.IModule = require('theMainModule');

    mod["registerController"]('ProductSidebarController',['singletonProduct', App.Product.SidebarController]);

});