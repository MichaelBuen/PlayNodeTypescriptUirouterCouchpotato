///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>




module App.Welcome {
    export class Controller {

        sampleMessage : string;

        constructor(singletonHeader: ViewValue.Header) {

            singletonHeader.title = "Welcome";

            this.sampleMessage = "Welcome Message";
        }
    }
}



if (!window["isTestRunning"])
define( require => {
    var app: angular.IModule = require('theMainModule');
    app["registerController"]('WelcomeController',['singletonHeader', App.Welcome.Controller]);

});
