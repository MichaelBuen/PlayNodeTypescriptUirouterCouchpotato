///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/Domain/Product.ts"/>
///<reference path="../../../shared/Domain/Person.ts"/>

///<reference path="../../../shared/ViewValue/Header.ts"/>




module App.Product {
    export class Controller {

        sampleMessage : string;



        person : Domain.Person;

        constructor(public product: Domain.Product, header: ViewValue.Header) {

            console.log("Product's Controller: User of factory/services");

            header.title = "Product";

            this.sampleMessage = "Product's sample message";

            // need to re-initialized the properties, so as not to get the previous singleton values
            this.product.initialize();

            console.log('called');


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

}



define(require => {

    var mod: angular.IModule = require('theMainModule');
    require('/shared/Domain/Person.js');

    mod["registerController"]('ProductController', ['singletonProduct', 'singletonHeader', App.Product.Controller]);

})