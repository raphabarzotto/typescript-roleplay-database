import { IUser } from '../interfaces/usersInterface';
import createUser from '../models/usersModel';

export default async function createUserService(user: IUser) {
  const data = await createUser(user);
  return { status: 201, data };
}