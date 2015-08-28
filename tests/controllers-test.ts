///<reference path="../typings/jasmine/jasmine.d.ts"/>
///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="_must-be-runned-first.ts"/>



///<reference path="../shared/Domain/Person.ts"/>
///<reference path="../public/app-dir/Welcome/Controller.ts"/>
///<reference path="../public/app-dir/Product/Controller.ts"/>
///<reference path="../public/app-dir/Board/Controller.ts"/>



doTest(require => {




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
        require('/base/shared/ViewValue/Header.js');

        require('/base/shared/Domain/Product.js');
        require('/base/shared/Domain/Person.js');


        it("title set", () => {

            var p = new Domain.Product();
            var h = new ViewValue.Header();
            h.title = "";

            var ctrl = new App.Product.Controller(p, h);
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



