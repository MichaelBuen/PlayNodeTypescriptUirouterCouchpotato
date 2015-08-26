var Domain;
(function (Domain) {
    var Product = (function () {
        function Product() {
            this.name = "Initial Value";
            this.yearModel = 1900;
            console.log('Domain.Product Constructor');
        }
        Object.defineProperty(Product.prototype, "product", {
            get: function () {
                return this.multiplicand * this.multiplier;
            },
            enumerable: true,
            configurable: true
        });
        Product.prototype.initialize = function () {
            this.name = "";
            this.yearModel = 0;
        };
        Product.prototype.subscribeCallback = function (callback) {
            this.callbackSelected = callback;
        };
        return Product;
    })();
    Domain.Product = Product;
})(Domain || (Domain = {}));
//# sourceMappingURL=Product.js.map