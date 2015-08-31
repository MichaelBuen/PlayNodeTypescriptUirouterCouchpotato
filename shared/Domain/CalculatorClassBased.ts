///<reference path="../../typings/node/node.d.ts"/>

var isNode = typeof exports !== 'undefined' && this.exports !== exports;


module Domain {

    export class CalculatorClassBased {

        multiply(multiplicand: number, multiplier: number): number {

            return multiplicand * multiplier;
        }

        divide(dividend: number, divisor: number): number {

            return null;
        }

    }

}



if (isNode) {
    module.exports = Domain.CalculatorClassBased;
}





