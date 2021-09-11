import { assert } from "chai";
import PriceCalculator from "../classes/PriceCalculator";
import { UserType } from "../enums/UserType";
import { ProductType } from "../enums/ProductType";
import User from "../classes/User";
import Product from "../classes/Product";

describe("Price Calculator tests", () => {
  let user: User;
  let product: Product;
  before(() => {
    user = new User("User 1", 1);
    product = new Product("Product 1", 0, 100, new Date());
  });

  it("should calculate rebate correctly", () => {
    // @ts-ignore
    assert.equal(PriceCalculator.calculateRebate(product, user), 15);
  });
  it("should calculate productTypePrice correctly", () => {
    // @ts-ignore
    assert.equal(PriceCalculator.caculateProductTypePrice(product), 25);
  });
  it("should calculate productTypePrice correctly", () => {
    assert.equal(PriceCalculator.calculate(user, product), 110);
  });
});
