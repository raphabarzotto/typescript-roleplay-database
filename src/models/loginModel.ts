import connection from './connection';
import { ILogin } from '../interfaces/loginInterface';

export default async function loginService(body: ILogin): Promise<ILogin[]> {
  const { username, password } = body;
  const query = `
    SELECT
      id,
      username,
      password
    FROM
      Trybesmith.Users as users
    WHERE
      users.username = ? 
    AND
      users.password = ? `;

  const [result] = await connection.execute(query, [username, password]);

  return result as ILogin[];
}