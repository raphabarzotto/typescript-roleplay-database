import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../interfaces/productsInterface';

const BAD_REQUEST = 400;
const UNPROCESSABLE_ENTITY = 422;

function nameValidation(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body as IProduct;
  if (!name) {
    return res.status(BAD_REQUEST).json({
      message: '"name" is required',
    });
  } 
  if (typeof name !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"name" must be a string',
    });
  }
  if (name.length < 3) {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"name" length must be at least 3 characters long',
    });
  }
  next();
}

function amountValidation(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body as IProduct;
  if (!amount) {
    return res.status(BAD_REQUEST).json({
      message: '"amount" is required',
    });
  } 
  if (typeof amount !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"amount" must be a string',
    });
  }
  if (amount.length < 3) {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }

  next();
}

export default { 
  nameValidation, 
  amountValidation,
};