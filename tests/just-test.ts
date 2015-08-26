///<reference path="../typings/jasmine/jasmine.d.ts"/>
///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="../typings/angularjs/angular-mocks.d.ts"/>


///<reference path="../shared/Domain/Person.ts"/>
///<reference path="../public/app-dir/Welcome/Controller.ts"/>


describe("Hello world",() => {

    it("says hello", () => {
        var s = "Hello World!";
        expect(s).toEqual("Hello World!");
    });


});

var def = window["define"];
window["define"] = function(depArray : string[], c: any) {
    console.log('define intercepted');
    console.log(depArray);
};


def(require => {


    require("/base/shared/Domain/Person.js");
    require("/base/shared/ViewValue/Header.js");
    require("/base/browser/node_modules/angular/angular.js");
    require("/base/browser/node_modules/angular-mocks/angular-mocks.js");

    describe("Person Domain", () => {


        it("says negative", () => {
            var p = new Domain.Person();
            expect(p.n).toEqual(-1);
        });

    });

    require('/base/public/app-dir/Welcome/Controller.js');

    describe("Welcome Controller", () => {

        it("says welcome", () => {

            var ctrl = new App.Welcome.Controller(<angular.IScope>{},  new ViewValue.Header() );
            expect(ctrl.sampleMessage).toEqual("Welcome");
        });

    });

});



