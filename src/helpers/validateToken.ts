import dotenv from 'dotenv';
import jwt, { Secret } from 'jsonwebtoken';
import { IOrderToken } from '../interfaces/ordersInterface';

dotenv.config();
const secret: Secret = 'suaSenhaSecreta';

const validateToken = (token: string): IOrderToken | boolean => {
  try {
    const response = jwt.verify(token, secret);
    return response as IOrderToken;
  } catch (err) {
    return false;
  }
};

export default validateToken;