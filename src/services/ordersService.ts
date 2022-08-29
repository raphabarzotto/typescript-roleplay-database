import getAllOrdersModel from '../models/ordersModel';

export async function getAllOrdersService() {
  const data = await getAllOrdersModel();
  return { status: 200, data };
}
