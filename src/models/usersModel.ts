import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser, IUserWithID } from '../interfaces/usersInterface';

export default async function createUserModel(user: IUser): Promise<IUserWithID> {
  const { username, classe, level, password } = user;

  const query = `INSERT INTO RoleplayDatabase.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  return { ...user, id };
}