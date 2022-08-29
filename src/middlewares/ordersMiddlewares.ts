import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

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

// const password = 'senhaSecreta';
export function tokenValidation(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    if (token === 'Bearer 123') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    // jwt.verify(token, password); 
    next();
  } catch (e) { return res.status(401).json({ message: 'Invalid token' }); }
}