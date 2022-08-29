import connection from './connection';
import { IOrder } from '../interfaces/ordersInterface';

export default async function getAllOrdersModel(): Promise<IOrder[]> {
  const query = `
    SELECT
      Orders.id,
      userId,
      Products.id AS productsIds
    FROM
      Trybesmith.Orders
    INNER JOIN
      Trybesmith.Products
        ON Products.orderId = Orders.id
    GROUP BY Orders.id
    ORDER BY Orders.userid;`;

  const [result] = await connection.execute(query);

  return result as IOrder[];
}