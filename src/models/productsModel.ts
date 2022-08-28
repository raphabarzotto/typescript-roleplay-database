import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct, IProductWithID } from '../interfaces/productsInterface';

export async function create(productToCreate: IProduct): Promise<IProductWithID> {
  const { name, amount } = productToCreate;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId } = result;

  return { ...productToCreate, id: insertId };
}

export async function getAll(): Promise<IProductWithID[]> {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [result] = await connection.execute(query);

  return result as IProductWithID[];
}