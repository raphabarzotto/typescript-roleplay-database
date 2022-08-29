import { Request, Response } from 'express';
import { getAllOrdersService } from '../services/ordersService';

export default async function getAllOrdersController(_req: Request, res: Response) {
  const { status, data } = await getAllOrdersService();
  res.status(status).json(data);
}