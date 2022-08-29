import loginModel from '../models/loginModel';
import { ILogin } from '../interfaces/loginInterface';
import jwtGenerator from '../helpers/jwtGenerator';

const HTTP_UNAUTHORIZE = {
  status: 401,
  message: { message: 'Username or password invalid' },
};

export default async function loginService(body: ILogin) {
  const [result] = await loginModel(body);
  if (!result) {
    return HTTP_UNAUTHORIZE;
  }

  const token = jwtGenerator(result);
  return { status: 200, message: token };
}
