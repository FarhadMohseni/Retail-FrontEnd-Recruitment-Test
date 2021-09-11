"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductType_1 = require("../enums/ProductType");
var UserType_1 = require("../enums/UserType");
var PriceCalculator = /** @class */ (function () {
    function PriceCalculator() {
    }
    PriceCalculator.calculate = function (user, product) {
        try {
            var productTypePrice = this.caculateProductTypePrice(product);
            var rebate = this.calculateRebate(product, user);
            return product.price + productTypePrice - rebate;
        }
        catch (error) {
            console.error(error);
        }
        return 0;
    };
    PriceCalculator.calculateRebate = function (product, user) {
        var rebate = 0;
        var today = new Date().toDateString();
        if (product.publishedDate.toDateString() == today)
            rebate += 10;
        if (user.type == UserType_1.UserType.CompanyUser)
            rebate += 5;
        return rebate;
    };
    PriceCalculator.caculateProductTypePrice = function (product) {
        return product.type === ProductType_1.ProductType.New ? 25 : 35;
    };
    return PriceCalculator;
}());
exports.default = PriceCalculator;
