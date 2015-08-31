
///<reference path="../typings/jasmine/jasmine.d.ts"/>
///<reference path="../typings/requirejs/require.d.ts"/>
///<reference path="_must-be-runned-first.ts"/>

///<reference path="../shared/Domain/Person.ts"/>
///<reference path="../public/app-dir/Welcome/Controller.ts"/>
///<reference path="../public/app-dir/Product/Controller.ts"/>

///<reference path="../shared/Domain/Calculator.ts"/>
///<reference path="../shared/Domain/FinancialCalculator.ts"/>


///<reference path="../shared/Domain/CalculatorClassBased.ts"/>
///<reference path="../shared/Domain/FinancialCalculatorClassBased.ts"/>



doTest(require => {

    require('/base/shared/Domain/Product.js');

    require('/base/shared/Domain/Calculator.js');
    require('/base/shared/Domain/FinancialCalculator.js');


    require('/base/shared/Domain/CalculatorClassBased.js');
    require('/base/shared/Domain/FinancialCalculatorClassBased.js');



    describe("Product Domain", () => {

        it("multiplied", () => {

            var p = new Domain.Product();

            p.multiplicand = 7;
            p.multiplier = 6;

            var answer = 42;

            console.log(p);

            expect(p.product).toEqual(answer);
        });
    });

    describe("Financial Calculator", () => {

        it("multiplied", () => {
            var answer = Domain.FinancialCalculator.applyInterest(100,0.2);

            expect(answer).toEqual(120);
        });

    });

    describe("Calculator", () => {

        it("multiplied", () => {
            var answer = Domain.Calculator.multiply(3,2);

            expect(answer).toEqual(6);
        });

    });


    describe("Financial Calculator Class-based", () => {

        it("multiplied", () => {
            var f = new Domain.FinancialCalculatorClassBased();

            var answer = f.applyInterest(100,0.2);

            expect(answer).toEqual(120);
        });

    });

    describe("Calculator Class-based", () => {

        it("multiplied", () => {

            var c = new Domain.CalculatorClassBased();

            var answer = c.multiply(3,2);

            expect(answer).toEqual(6);
        });

    });



});


