import * as ordersModel from '../models/ordersModel';

export async function getAllOrdersService() {
  const data = await ordersModel.getAllOrdersModel();
  return { status: 200, data };
}

export async function postOrdersService(id: number, productsIds: number[]) {
  const result = await ordersModel.postOrdersModel(id, productsIds);
  return { status: 201, message: result };
}