///<reference path="CalculatorClassBased.ts"/>
/// <reference path="../../typings/node/node.d.ts"/>




var isNode = typeof exports !== 'undefined' && this.exports !== exports;

var calculatorClassBasedType : typeof Domain.CalculatorClassBased = isNode ? require('./CalculatorClassBased') : Domain.CalculatorClassBased;

var calculator = new calculatorClassBasedType();



module Domain {


    export class FinancialCalculatorClassBased {

        applyInterest(amount: number, percentInterest: number): number {

            return calculator.multiply(amount, 1 + percentInterest);
        }

    }


}


if (isNode) {
    module.exports = Domain.FinancialCalculatorClassBased;
}




