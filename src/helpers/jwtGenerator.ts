// source: https://www.npmjs.com/package/jsonwebtoken
import { sign } from 'jsonwebtoken';
import { IToken } from '../interfaces/tokenInterface';

const jwtConfig = {
  expiresIn: '1d',
}; 

const SECRET = process.env.JWT_SECRET || 'Trybesmith';

export default (data: IToken) => sign({ data }, SECRET, jwtConfig);