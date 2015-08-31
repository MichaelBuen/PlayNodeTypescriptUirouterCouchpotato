///<reference path="../typings/jasmine/jasmine.d.ts"/>
///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="_must-be-runned-first.ts"/>



///<reference path="../shared/Domain/Person.ts"/>
///<reference path="../public/app-dir/Welcome/Controller.ts"/>
///<reference path="../public/app-dir/Product/Controller.ts"/>
///<reference path="../public/app-dir/Board/Controller.ts"/>



define(require => {

    require('/base/shared/Domain/Product.js');
    require('/base/shared/Domain/Person.js');
    require('/base/public/app-dir/Product/Controller.js');


    require('/base/shared/Domain/Calculator.js'); // error is not too descriptive, hard to debug: TypeError: 'undefined' is not an object (evaluating 'new App.Product.Controller')

    require('/base/shared/Domain/CalculatorClassBased.js'); // error is not too descriptive, hard to debug: TypeError: 'undefined' is not an object (evaluating 'new App.Product.Controller')
    require('/base/shared/Domain/FinancialCalculatorClassBased.js'); // error is not too descriptive, hard to debug: TypeError: 'undefined' is not an object (evaluating 'new App.Product.Controller')

    var umdClass = require('/base/shared/Domain/SampleUmd.js').SampleUmd;


    describe("UMD", () => {

        it("loads UMD", () => {
            var sampleUmd = new umdClass();
            //console.log(sampleUmd.something());
            expect(sampleUmd.something()).toEqual(76);
        });

        it("pass UMD", () => {

            var sampleUmd = new umdClass();

            var p = new Domain.Product();
            var h = new ViewValue.Header();

            console.log('hei');

            var ctrl = new App.Product.Controller(p, h, /*Upload*/ null, /*$timeout*/ null, sampleUmd);

            expect(ctrl.umdResult).toEqual(76);
        });


    });


    describe("Welcome Controller", () => {


        require('/base/public/app-dir/Welcome/Controller.js');
        require('/base/shared/ViewValue/Header.js');

        it("says welcome", () => {
            var h = new ViewValue.Header();

            var ctrl = new App.Welcome.Controller(h);
            expect(ctrl.sampleMessage).toEqual("Welcome Message");
            expect(h.title).toEqual("Welcome");
        });

    });



    describe("Product Controller", () => {

        require('/base/public/app-dir/Product/Controller.js');
        require('/base/shared/ViewValue/Header.js');

        require('/base/shared/Domain/Product.js');
        require('/base/shared/Domain/Person.js');


        it("title set", () => {

            var p = new Domain.Product();
            var h = new ViewValue.Header();
            h.title = "";

            var sampleUmd = new umdClass();

            var ctrl = new App.Product.Controller(p, h, /*Upload*/ null, /*$timeout*/ null, sampleUmd);
            expect(ctrl.sampleMessage).toEqual("Product's sample message");
            expect(h.title).not.toEqual("");
        });


    });


    describe("Board Controller", () => {
        require('/base/public/app-dir/Board/Controller.js');
        require('/base/shared/ViewValue/Header.js');


        var h = new ViewValue.Header();

        it("computes discount", () => {
            // Arrange
            var b = new App.Board.Controller(h);
            b.product.price = 50;
            b.percentDiscount = 0.10;
            var discountedPrice = 45;


            // Assert
            expect(b.discountedPrice).toEqual(discountedPrice);

        });
    });



});



