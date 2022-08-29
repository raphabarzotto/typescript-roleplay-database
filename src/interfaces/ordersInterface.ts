export interface IOrder {
  id?: number;
  userId: number;
  productsIds: number[];
}

export interface IOrderToken {
  id: number;
  username: string;
  classe: string;
  level: string;
  password: string;
}