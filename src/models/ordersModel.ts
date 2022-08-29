import connection from './connection';
import { IOrder } from '../interfaces/ordersInterface';

export default async function getAllOrdersModel(): Promise<IOrder[]> {
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