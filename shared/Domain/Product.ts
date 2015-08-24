module Domain {

    interface personIdSelectedCallback {
        (personIdSelected: number) : void;
    }


    export class Product {
        name : string;
        yearModel : number;

        constructor() {
            this.name = "Initial Value";
            this.yearModel = 1900;
        }

        initialize() : void {
            this.name = "";
            this.yearModel = 0;
        }

        private callbackSelected : personIdSelectedCallback;

        subscribeCallback(callback: personIdSelectedCallback) : void {
            this.callbackSelected = callback;
        }

    }
}

