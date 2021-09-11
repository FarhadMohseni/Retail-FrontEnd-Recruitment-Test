"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(name, type, price, publishedDate) {
        if (publishedDate === void 0) { publishedDate = new Date(); }
        this.name = name;
        this.type = type;
        this.price = price;
        this.publishedDate = publishedDate;
    }
    return Product;
}());
exports.default = Product;
