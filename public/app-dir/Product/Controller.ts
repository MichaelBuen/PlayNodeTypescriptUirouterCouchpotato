///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>

///<reference path="../../../shared/Domain/Product.ts"/>
///<reference path="../../../shared/Domain/Person.ts"/>

/// <reference path="../../../shared/Domain/CalculatorClassBased.ts"/>
/// <reference path="../../../shared/Domain/FinancialCalculatorClassBased.ts"/>

/// <reference path="../../../shared/Domain/Calculator.ts"/>


/// <reference path="../../../shared/ViewValue/Header.ts"/>




module App.Product {
    export class Controller {

        sampleMessage : string;

        person : Domain.Person;

        username : string;

        errorMeg : string;

        picFile : any;


        interestApplied : number;

        multiplicationResult : number;

        umdResult: number;


        constructor(public product: Domain.Product, header: ViewValue.Header, public Upload, public $timeout, UmdService) {

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
            this.person.age = 21;
            this.person.name = "Kel";



            var f = new Domain.FinancialCalculatorClassBased();
            this.interestApplied = f.applyInterest(100, 0.2);


            this.multiplicationResult = Domain.Calculator.multiply(7,6);

            console.log('mighty');

            this.umdResult = UmdService.something();

        }

        show() {
            this.sampleMessage = "New Product";
        }

        uploadPic(file) : void {

            file.upload = this.Upload.upload({
                url: '/api/photo',
                method: 'POST',
                headers: {
                    'my-header': 'my-header-value'
                },
                fields: {username: this.username},
                file: file,
                fileFormDataName: 'myFile'
            });

            file.upload.then(response => {
                this.$timeout(() => {
                    file.result = response.data;
                })
            }, response => {
                if (response.status > 0)
                    this.errorMeg = response.status + ': '+ response.data;
            });

            file.upload.progress(evt => {
               file.progress = Math.min(100, 100.0 * evt.loaded / evt.total);
            });

        }
    }

}


if (!window["isTestRunning"])
define(require => {

    var mod: angular.IModule = require('theMainModule');
    require('/shared/Domain/Person.js');

    require('/shared/Domain/Calculator.js');

    require('/shared/Domain/CalculatorClassBased.js');
    require('/shared/Domain/FinancialCalculatorClassBased.js');

    mod["registerController"]('ProductController', ['singletonProduct', 'singletonHeader', 'Upload', '$timeout', 'UmdService',
        App.Product.Controller]);

})