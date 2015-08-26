///<reference path="../../../typings/requirejs/require.d.ts"/>
///<reference path="../../../typings/angularjs/angular.d.ts"/>
///<reference path="../../../shared/ViewValue/Header.ts"/>


module App.Board {
    export class Controller {


        boardMessage : string;


        constructor(header: ViewValue.Header) {

            header.title = "Board";

            this.boardMessage = "Board Message";
        }
    }
}


define(require => {

    var mod : angular.IModule = require('theMainModule');

    mod["registerController"]('BoardController',['singletonHeader', App.Board.Controller]);

})