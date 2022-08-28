export interface IProduct {
  name: string;
  amount: string;
}

export interface IProductWithID extends IProduct {
  id: number;
}