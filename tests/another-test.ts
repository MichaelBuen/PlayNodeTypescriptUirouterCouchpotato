///<reference path="../typings/jasmine/jasmine.d.ts"/>

///<reference path="../shared/Domain/Person.ts"/>

///<reference path="../public/app-dir/Welcome/Controller.ts"/>
///<reference path="../typings/requirejs/require.d.ts"/>

///<reference path="../public/app-dir/Product/Controller.ts"/>






describe("Hello world",() => {

    it("says hello", () => {
        var s = "Hello World!";
        expect(s).toEqual("Hello World!");
    });


});


var def = window["def"];


def(require => {


    describe("Person Domain", () => {

        require("/base/shared/Domain/Person.js");
        require("/base/shared/ViewValue/Header.js");


        it("says negative", () => {
            var p = new Domain.Person();
            expect(p.n).toEqual(-1);
        });

    });



    describe("Welcome Controller", () => {

        require('/base/public/app-dir/Welcome/Controller.js');

        it("says welcome", () => {
            var h = new ViewValue.Header();

            var ctrl = new App.Welcome.Controller(h);
            expect(ctrl.sampleMessage).toEqual("Welcome Message");
            expect(h.title).toEqual("Welcome");
        });

    });



    describe("Product Controller", () => {

        require('/base/public/app-dir/Product/Controller.js');
        require('/base/shared/Domain/Product.js');
        require('/base/shared/ViewValue/Header.js');


        it("says product", () => {

            var p = new Domain.Product();
            var h = new ViewValue.Header();

            var ctrl = new App.Product.Controller(p, h);
            expect(ctrl.sampleMessage).toEqual("Product's sample message");
            expect(h.title).toEqual("Product");
        });


    });


    describe("Product Domain", () => {
        require('/base/shared/Domain/Product.js');

        it("multiplied", () => {

            var p = new Domain.Product();

            p.multiplicand = 7;
            p.multiplier = 6;

            var answer = 42;

            console.log(p);

            expect(p.product).toEqual(answer);
        });
    });

});



