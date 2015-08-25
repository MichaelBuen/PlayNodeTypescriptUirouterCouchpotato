///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>
var App;
(function (App) {
    var Board;
    (function (Board) {
        var Controller = (function () {
            function Controller($scope, header) {
                $scope["self"] = this;
                header.title = "Board";
                this.boardMessage = "Board Message";
            }
            return Controller;
        })();
        Board.Controller = Controller;
    })(Board = App.Board || (App.Board = {}));
})(App || (App = {}));
define(function (require) {
    var mod = require('theMainModule');
    mod["registerController"]('BoardController', ['$scope', 'singletonHeader', App.Board.Controller]);
});
//# sourceMappingURL=Controller.js.map