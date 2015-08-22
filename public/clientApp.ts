/// <reference path="../typings/jquery/jquery.d.ts"/>
/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/requirejs/require.d.ts"/>

import $ = require('jquery');

import angular = require('angular');

$(() => {
    window.alert('yay')
});


class Controller {
    name : string;

    constructor() {
        this.name = "Michael";
    }
}





/*
$(() => {
    $('div').text('hello');
});
*/




/*

require(['angular'], function (app, angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [app['name'], function () {

            // for good measure, put ng-app on the html element
            // studiously avoiding jQuery because angularjs.org says we shouldn't
            // use it.  In real life, there are a ton of reasons to use it.
            // karma likes to have ng-app on the html element when using requirejs.
            angular.element(document).find('html').addClass('ng-app');

        }]);
    });
});
*/


// angular.module('TheApp',[]).controller('Controller', Controller);