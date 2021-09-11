import User from "./classes/User";
import Product from "./classes/Product";
import PriceCalculator from "./classes/PriceCalculator";
var calculatedPrice = 0;
var user = new User("User 1", 1);
var product = new Product("Product 1", 0, 100, new Date());
try {
  calculatedPrice = PriceCalculator.calculate(user, product);
} catch (error) {
  console.error(error);
}
console.log(calculatedPrice);
