"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./classes/User"));
var Product_1 = __importDefault(require("./classes/Product"));
var PriceCalculator_1 = __importDefault(require("./classes/PriceCalculator"));
var calculatedPrice = 0;
var user = new User_1.default("User 1", 1);
var product = new Product_1.default("Product 1", 0, 100, new Date());
try {
    calculatedPrice = PriceCalculator_1.default.calculate(user, product);
}
catch (error) {
    console.error(error);
}
console.log(calculatedPrice);
