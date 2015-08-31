/// <reference path="../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/proxyquire/proxyquire.d.ts"/>

/// <reference path="../shared/Domain/Calculator.ts"/>
/// <reference path="../shared/Domain/FinancialCalculator.ts"/>


// var proxyquire = require('../node_modules/proxyquire/lib/proxyquire.js');

var proxyquire = require('proxyquire');


class ExternalizedDomain {
    static Calculator : typeof Domain.Calculator = require('../shared/Domain/Calculator');
    static FinancialCalculator : typeof Domain.FinancialCalculator = require("../shared/Domain/FinancialCalculator");
}


describe("multiplication", () => {
    it("should multiply 2 and 3", () => {

        var product = ExternalizedDomain.Calculator.multiply(2,3);
        expect(product).toEqual(6);
    });
});


describe("financial", () => {

    it("applies interest", () => {

        var product = ExternalizedDomain.FinancialCalculator.applyInterest (100,0.2);
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

});


