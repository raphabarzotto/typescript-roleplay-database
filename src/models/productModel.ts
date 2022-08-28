import connection from "./connection";
import { IProduct, IProductWithID } from "../interfaces/productInterface";
import { ResultSetHeader } from 'mysql2';

export async function create(productToCreate: IProduct): Promise<IProductWithID> {
  const { name, amount } = productToCreate;
  const query = "INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)"

  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId } = result;

  return { ...productToCreate, id: insertId}
}