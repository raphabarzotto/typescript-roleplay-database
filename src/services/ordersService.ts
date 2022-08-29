import getAllOrdersModel from '../models/ordersModel';

export default async function getAllOrdersService() {
  const data = await getAllOrdersModel();
  return { status: 200, data };
}
