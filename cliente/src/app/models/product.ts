

export class Product {
  _id?: number;
  name:string;
  category: string;
  localization: string;
  prize: number;

  constructor(name:string, category:string,localization:string,prize:number){
    this.name= name;
    this.category= category;
    this.localization= localization;
    this.prize= prize;
  }
}
