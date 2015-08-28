///<reference path="../typings/jasmine/jasmine.d.ts"/>
///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="_must-be-runned-first.ts"/>

///<reference path="../shared/Domain/Person.ts"/>
///<reference path="../public/app-dir/Welcome/Controller.ts"/>
///<reference path="../public/app-dir/Product/Controller.ts"/>




doTest(require => {


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

