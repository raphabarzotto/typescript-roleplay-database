import { Request, Response } from 'express';
import { ILogin } from '../interfaces/loginInterface';
import loginService from '../services/loginService';

export default async function loginController(req: Request, res: Response) {
  const body = req.body as ILogin;
  const { status, message } = await loginService(body);
  res.status(status).json(message);
}