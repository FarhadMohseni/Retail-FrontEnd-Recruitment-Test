import { UserType } from "../enums/UserType";
class User {
  name: string;
  type: UserType;

  constructor(name: string, type: number) {
    this.name = name;
    this.type = type as UserType;
  }
}
