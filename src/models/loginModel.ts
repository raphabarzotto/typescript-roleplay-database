import connection from './connection';
import { ILogin } from '../interfaces/loginInterface';

export default async function loginModel(body: ILogin): Promise<ILogin[]> {
  const { username, password } = body;
  const query = `
    SELECT
      id,
      username,
      password
    FROM
      RoleplayDatabase.Users as users
    WHERE
      users.username = ? 
    AND
      users.password = ? `;

  const [result] = await connection.execute(query, [username, password]);

  return result as ILogin[];
}