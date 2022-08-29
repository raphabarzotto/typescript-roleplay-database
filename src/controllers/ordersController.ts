import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as ordersServices from '../services/ordersService';
import { IUserWithID } from '../interfaces/usersInterface';

const secret = 'criandoToken';

export async function getAllOrdersController(_req: Request, res: Response) {
  const { status, data } = await ordersServices.getAllOrdersService();
  res.status(status).json(data);
}

export async function postOrdercontroller(req: Request, res: Response) {
  const { productsIds } = req.body;
  const token = req.headers.authorization as string;
  const data = jwt.verify(token, secret);
  const { id } = data as IUserWithID;
  const result = await ordersServices.postOrderService({ userId: id, productsIds });
  return res.status(result.status).json(result.message);
}