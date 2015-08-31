/// <reference path="../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/proxyquire/proxyquire.d.ts"/>


/// <reference path="../shared/Domain/Calculator.ts"/>
/// <reference path="../shared/Domain/FinancialCalculator.ts"/>

/// <reference path="../shared/Domain/CalculatorClassBased.ts"/>
/// <reference path="../shared/Domain/FinancialCalculatorClassBased.ts"/>


// var proxyquire = require('../node_modules/proxyquire/lib/proxyquire.js');

import proxyquire = require('proxyquire');





class ExternalizedDomain {
    static Calculator : typeof Domain.Calculator = require('../shared/Domain/Calculator');
    static FinancialCalculator : typeof Domain.FinancialCalculator = require("../shared/Domain/FinancialCalculator");

    static CalculatorClassBasedType : typeof Domain.CalculatorClassBased = require('../shared/Domain/CalculatorClassBased');
    static FinancialCalculatorClassBasedType : typeof Domain.FinancialCalculatorClassBased = require("../shared/Domain/FinancialCalculatorClassBased");
}


describe("module calculator", () => {
    it("should multiply 2 and 3", () => {

        var product = ExternalizedDomain.Calculator.multiply(2,3);
        expect(product).toEqual(6);
    });
});


describe("module financial", () => {

    it("applies interest", () => {

        var product = ExternalizedDomain.FinancialCalculator.applyInterest (100,0.2);
        expect(product).toEqual(120);

    });

});

describe("module calculator: class-based", () => {
    it("should multiply 2 and 3", () => {

        var c = new ExternalizedDomain.CalculatorClassBasedType();

        var product = c.multiply(2,3);
        expect(product).toEqual(6);
    });
});


describe("module financial: class-based", () => {

    it("applies interest", () => {

        var f = new ExternalizedDomain.FinancialCalculatorClassBasedType();

        var product = f.applyInterest (100,0.2);
        expect(product).toEqual(120);

    });

});


describe("financial", () => {

    it("applies interest using stubbed calculator", () => {

        var calculatorStub : any = {};

        var financialCalculator : typeof Domain.FinancialCalculator = proxyquire('../shared/Domain/FinancialCalculator', { './Calculator': calculatorStub });

        var interestApplied = financialCalculator.applyInterest(200, 0.2);
        expect(interestApplied).toEqual(240);


        calculatorStub.multiply = (a,b) => 6;
        var interestAppliedFromStubbedCalculator = financialCalculator.applyInterest(100, 0.2);
        expect(interestAppliedFromStubbedCalculator).toEqual(6);
    });


    it("applies interest using stubbed class-based calculator", () => {


        var calculatorType : typeof Domain.CalculatorClassBased = ExternalizedDomain.CalculatorClassBasedType;


        var financialCalculatorClassBasedType : typeof Domain.FinancialCalculatorClassBased = proxyquire('../shared/Domain/FinancialCalculatorClassBased', { './CalculatorClassBased':  calculatorType });
        //var financialCalculatorClassBasedType :  typeof Domain.FinancialCalculatorClassBased = require('../shared/Domain/FinancialCalculatorClassBased');

        var financialCalculatorClassBased = new financialCalculatorClassBasedType();


        var interestApplied = financialCalculatorClassBased.applyInterest(200, 0.2);
        expect(interestApplied).toEqual(240);


        // Proxyquire can't help us here
        var backupMultiply = calculatorType.prototype.multiply;
        calculatorType.prototype.multiply = (a,b) => 6;
        var interestAppliedFromStubbedCalculator = financialCalculatorClassBased.applyInterest(100, 0.2);
        expect(interestAppliedFromStubbedCalculator).toEqual(6);
        calculatorType.prototype.multiply = backupMultiply;


    });


    it("prototype is ok", () => {

        var c = new ExternalizedDomain.CalculatorClassBasedType();

        // just making sure the test above doesn't affect the Domain.CalculatorClassBased.prototype.multiply is restored.
        expect(100).toEqual(c.multiply(50,2));

    });

});



import c = require('../shared/Domain/SampleUmd');


describe("UMD", () => {



    it("loads ok", () => {

        var x = new c.SampleUmd();

        expect(x.something()).toEqual(76);

    });
});

