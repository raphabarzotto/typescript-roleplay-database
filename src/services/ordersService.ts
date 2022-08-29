import * as ordersModel from '../models/ordersModel';
import { IOrder } from '../interfaces/ordersInterface';

export async function getAllOrdersService() {
  const data = await ordersModel.getAllOrdersModel();
  return { status: 200, data };
}

export async function postOrderService(body: IOrder) {
  const { userId, productsIds } = body;

  const result = await ordersModel.postOrderModel({ userId, productsIds });
  return { status: 201, message: result };
}