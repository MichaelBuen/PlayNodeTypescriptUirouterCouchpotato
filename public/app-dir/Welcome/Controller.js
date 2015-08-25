///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
/*
define(['theApp'], function (app) {
    app.registerController(
        'WelcomeController',
        [
            '$scope', '$state',
            function($scope, $state) {
                $scope.self = { sampleMessage : "No TypeScript" };
            }
        ]
    )
});
*/
var Controller = (function () {
    function Controller($scope) {
        $scope["self"] = this;
        this.sampleMessage = "Welcome";
    }
    return Controller;
})();
define(['theMainModule'], function (app) { return app["registerController"]('WelcomeController', ['$scope', Controller]); });
//# sourceMappingURL=Controller.js.map