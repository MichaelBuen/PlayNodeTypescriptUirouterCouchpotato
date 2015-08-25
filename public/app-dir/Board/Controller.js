///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>
var Controller = (function () {
    function Controller($scope, header) {
        $scope["self"] = this;
        header.title = "Board";
        this.boardMessage = "Board Message";
    }
    return Controller;
})();
define(function (require) {
    var mod = require('theMainModule');
    mod["registerController"]('BoardController', ['$scope', 'singletonHeader', Controller]);
});
//# sourceMappingURL=Controller.js.map