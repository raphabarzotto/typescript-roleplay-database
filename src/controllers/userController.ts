import { Request, Response } from 'express';
import { IUser } from '../interfaces/usersInterface';
import createUserService from '../services/usersService';
import jwtGenerator from '../helpers/jwtGenerator';

export default async function createUserController(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await createUserService(user);

  if (status === 201) data.token = jwtGenerator({ id: data.id, username: user.username });
  res.status(status).json(data);
}