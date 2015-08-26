module Domain {

    export interface personIdSelectedCallback {
        (personIdSelected: number) : void;
    }


    export class Product {
        name : string;
        yearModel : number;


        multiplicand: number;
        multiplier: number;

        get product() : number {
            return this.multiplicand * this.multiplier;
        }


        constructor() {
            this.name = "Initial Value";
            this.yearModel = 1900;

            console.log('Domain.Product Constructor');
        }

        initialize() : void {
            this.name = "";
            this.yearModel = 0;
        }

        // not accessible through controllers, but accessible on view
        private callbackSelected : personIdSelectedCallback;

        subscribeCallback(callback: personIdSelectedCallback) : void {
            this.callbackSelected = callback;
        }

    }
}

