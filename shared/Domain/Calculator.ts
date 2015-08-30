//module Domain {
//
//    export class Calculator {
//
//        multiply(multiplicand: number, multiplier: number): number {
//
//            return multiplicand * multiplier ;
//        }
//
//        divide(dividend: number, divisor: number): number {
//
//            return null;
//        }
//    }
//
//}
//
//declare var exports: any;
//if (typeof exports != 'undefined') {
//    exports.Calculator = Domain.Calculator;
//}
//
//
//
//

module Domain.Calculator {

    export function multiply(multiplicand: number, multiplier: number): number {

        return multiplicand * multiplier;
    }

    export function divide(dividend: number, divisor: number): number {

        return null;
    }
}

declare var exports: any;
if (typeof exports != 'undefined') {
    exports.Calculator = Domain.Calculator;
}





