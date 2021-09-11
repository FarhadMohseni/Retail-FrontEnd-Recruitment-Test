import User from "../classes/User";
import Product from "../classes/Product";
import { ProductType } from "../enums/ProductType";
import { UserType } from "../enums/UserType";
module PriceCalculator {
  function calculate(user: User, product: Product) {
    try {
      var productTypePrice: number = caculateProductTypePrice(product.type);
      var rebate: number = calculateRebate(product.publishedDate, user.type);
      return product.price + productTypePrice - rebate;
    } catch (error) {
      console.log(error);
    }
    return 0;
  }

  function calculateRebate(productPublishedDate: Date, userType: UserType) {
    var rebate: number = 0;
    var today: string = new Date().toDateString();
    if (productPublishedDate.toDateString() == today) rebate += 10;
    if (userType == UserType.CompanyUser) rebate += 5;
    return rebate;
  }

  function caculateProductTypePrice(productType: ProductType): number {
    return productType === ProductType.New ? 25 : 35;
  }
}
