import User from "../classes/User";
import Product from "../classes/Product";
import { ProductType } from "../enums/ProductType";
import { UserType } from "../enums/UserType";
export default class PriceCalculator {
  public static calculate(user: User, product: Product) {
    try {
      var productTypePrice: number = this.calculateProductTypePrice(product);
      var rebate: number = this.calculateRebate(product, user);
      return product.price + productTypePrice - rebate;
    } catch (error) {
      console.error(error);
    }
    return 0;
  }

  private static calculateRebate(product: Product, user: User) {
    var rebate: number = 0;
    var today: string = new Date().toDateString();
    if (
      product.publishedDate.toDateString() == today &&
      product.type == ProductType.New
    )
      rebate += 10;
    if (user.type == UserType.CompanyUser) rebate += 5;
    return rebate;
  }

  private static calculateProductTypePrice(product: Product): number {
    return product.type === ProductType.New ? 25 : 35;
  }
}
