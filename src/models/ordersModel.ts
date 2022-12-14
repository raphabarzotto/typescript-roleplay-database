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
      RoleplayDatabase.Orders
    INNER JOIN
      RoleplayDatabase.Products
    ON Products.orderId = Orders.id
    GROUP BY Orders.id
    ORDER BY Orders.userid;`;

  const [result] = await connection.execute(query);

  return result as IOrder[];
}

export async function postOrdersModel(body: IOrder) {
  const { userId, productsIds } = body;
  const query1 = 'INSERT INTO RoleplayDatabase.Orders (userId) VALUES (?)';
  const [result] = await connection.execute(query1, [userId]) as { insertId: number }[];
  const { insertId } = result;
  const query2 = 'UPDATE RoleplayDatabase.Products SET orderId = ? WHERE id = ?';
  await Promise.all(productsIds.map(async (productId: number) => {
    await connection.execute(query2, [insertId, productId]);
  }));
  return { userId, productsIds };
}