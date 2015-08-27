///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>
///<reference path="../../../shared/Domain/Product.ts"/>


module App.Board {
    export class Controller {


        boardMessage : string;

        product : Domain.Product;

        percentDiscount: number;

        get discountedPrice() : number {
            return this.product.price * (1 - this.percentDiscount);
        }

        constructor(header: ViewValue.Header) {

            header.title = "Board";

            this.product = new Domain.Product();

            this.boardMessage = "Board Message";
        }
    }
}


define(require => {

    var mod : angular.IModule = require('theMainModule');
    require('/shared/Domain/Product.sj');

    mod["registerController"]('BoardController',['singletonHeader', App.Board.Controller]);

})