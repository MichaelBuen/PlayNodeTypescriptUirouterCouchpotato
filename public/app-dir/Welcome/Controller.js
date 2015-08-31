///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>
var App;
(function (App) {
    var Welcome;
    (function (Welcome) {
        var Controller = (function () {
            function Controller(singletonHeader) {
                singletonHeader.title = "Welcome";
                this.sampleMessage = "Welcome Message";
            }
            return Controller;
        })();
        Welcome.Controller = Controller;
    })(Welcome = App.Welcome || (App.Welcome = {}));
})(App || (App = {}));
if (!window["isTestRunning"])
    define(function (require) {
        var app = require('theMainModule');
        app["registerController"]('WelcomeController', ['singletonHeader', App.Welcome.Controller]);
    });
//# sourceMappingURL=Controller.js.map