///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>
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
var App;
(function (App) {
    var Welcome;
    (function (Welcome) {
        var Controller = (function () {
            function Controller($scope, singletonHeader) {
                $scope["self"] = this;
                singletonHeader.title = "Welcome";
                this.sampleMessage = "Welcome";
            }
            return Controller;
        })();
        Welcome.Controller = Controller;
    })(Welcome = App.Welcome || (App.Welcome = {}));
})(App || (App = {}));
define(['theMainModule'], function (app) {
    return app["registerController"]('WelcomeController', ['$scope', 'singletonHeader', App.Welcome.Controller]);
});
//# sourceMappingURL=Controller.js.map