import { Request, Response, NextFunction } from 'express';
import validateToken from '../helpers/validateToken';

export function productsIdValidation(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res.status(400).json({
      message: '"productsIds" is required',
    });
  }
  if (productsIds.length === 0) {
    return res.status(422).json({
      message: '"productsIds" must include only numbers',
    });
  }
  if (typeof productsIds !== 'object') {
    return res.status(422).json({
      message: '"productsIds" must be an array',
    });
  }
  next();
}

export async function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  const isValid = validateToken(token);

  if (isValid === false) return res.status(401).json({ message: 'Invalid token' });

  next();
}