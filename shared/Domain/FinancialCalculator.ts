///<reference path="Calculator.ts"/>
/// <reference path="../../typings/node/node.d.ts"/>


var isNode = typeof exports !== 'undefined' && this.exports !== exports;

var calculator : typeof Domain.Calculator = isNode ? require('./Calculator') : Domain.Calculator;


module Domain.FinancialCalculator {


    export function applyInterest(amount: number, percentInterest: number): number {

        return calculator.multiply(amount, 1 + percentInterest);
    }

}


if (isNode) {
    module.exports = Domain.FinancialCalculator;
}




