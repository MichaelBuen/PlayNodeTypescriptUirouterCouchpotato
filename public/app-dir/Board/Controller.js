///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>
///<reference path="../../../shared/Domain/Product.ts"/>
var App;
(function (App) {
    var Board;
    (function (Board) {
        var Controller = (function () {
            function Controller(header) {
                header.title = "Board";
                this.product = new Domain.Product();
                this.boardMessage = "Board Message";
            }
            Object.defineProperty(Controller.prototype, "discountedPrice", {
                get: function () {
                    return this.product.price * (1 - this.percentDiscount);
                },
                enumerable: true,
                configurable: true
            });
            return Controller;
        })();
        Board.Controller = Controller;
    })(Board = App.Board || (App.Board = {}));
})(App || (App = {}));
define(function (require) {
    var mod = require('theMainModule');
    require('/shared/Domain/Product.sj');
    mod["registerController"]('BoardController', ['singletonHeader', App.Board.Controller]);
});
//# sourceMappingURL=Controller.js.map