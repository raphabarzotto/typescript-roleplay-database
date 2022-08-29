import { Request, Response, NextFunction } from 'express';
import { ILogin } from '../interfaces/loginInterface';

function nameValidation(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body as ILogin;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  next();
}

function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body as ILogin;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  next();
}

export default { nameValidation, passwordValidation };