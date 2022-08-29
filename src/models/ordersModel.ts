import connection from './connection';
import { IOrder } from '../interfaces/ordersInterface';

export async function getAllOrdersModel(): Promise<IOrder[]> {
  // source: https://www.tutorialspoint.com/mysql/mysql_aggregate_functions_json_arraygg.htm
  const query = `
    SELECT
      Orders.id,
      Orders.userId,
      JSON_ARRAYAGG(Products.id) AS productsIds
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

export async function postOrdersModel(id: number, productsIds: number[]) {
  const queryInsertOrders = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute(queryInsertOrders, [id]) as { insertId: number }[];
  const { insertId } = result;
  const queryUpdateProduct = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
  await Promise.all(productsIds.map(async (productId: number) => {
    await connection.execute(queryUpdateProduct, [insertId, productId]);
  }));
  return { userId: id, productsIds };
}