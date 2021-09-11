import { ProductType } from "../enums/ProductType";
export default class Product {
  name: string;
  type: ProductType;
  price: number;
  publishedDate: Date;

  constructor(
    name: string,
    type: number,
    price: number,
    publishedDate: Date = new Date()
  ) {
    this.name = name;
    this.type = type as ProductType;
    this.price = price;
    this.publishedDate = publishedDate;
  }
}
