///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
var Controller = (function () {
    function Controller($scope) {
        $scope["self"] = this;
        this.boardMessage = "Board Message";
    }
    return Controller;
})();
define(['theApp'], function (app) {
    app.registerController('BoardController', ['$scope', Controller]);
});
//# sourceMappingURL=Controller.js.map