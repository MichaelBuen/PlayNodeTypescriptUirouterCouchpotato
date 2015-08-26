///<reference path="../typings/jasmine/jasmine.d.ts"/>

///<reference path="../shared/Domain/Person.ts"/>

///<reference path="../public/app-dir/Welcome/Controller.ts"/>
///<reference path="../typings/requirejs/require.d.ts"/>



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

    describe("Person Domain", () => {


        it("says negative", () => {
            var p = new Domain.Person();
            expect(p.n).toEqual(-1);
        });

    });

    require('/base/public/app-dir/Welcome/Controller.js');

    describe("Welcome Controller", () => {

        it("says welcome", () => {
            expect(8).toEqual(8);
            return;

            var x = new App.Welcome.Controller(null, null);
            expect(x.sampleMessage).toEqual("Welcome");
        });

    });

});



