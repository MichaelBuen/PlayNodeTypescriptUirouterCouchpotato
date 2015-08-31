///<reference path="../../typings/node/node.d.ts"/>

var isNode = typeof exports !== 'undefined' && this.exports !== exports;


module Domain.Calculator {

    export function multiply(multiplicand: number, multiplier: number): number {

        return multiplicand * multiplier;
    }

    export function divide(dividend: number, divisor: number): number {

        return null;
    }


}



if (isNode) {
    module.exports = Domain.Calculator;
}





