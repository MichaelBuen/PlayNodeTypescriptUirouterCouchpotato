///<reference path="../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../shared/Domain/Calculator.ts"/>


class ExternalizedDomain {
    static Calculator : typeof Domain.Calculator = require('../shared/Domain/Calculator').Calculator;
}


describe("multiplication", () => {
    it("should multiply 2 and 3", () => {

        var product = ExternalizedDomain.Calculator.multiply(2,3);
        expect(product).toEqual(6);
    });
});