import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/usersInterface';

const BAD_REQUEST = 400;
const UNPROCESSABLE_ENTITY = 422;

function nameValidation(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body as IUser;
  if (!username) {
    return res.status(BAD_REQUEST).json({
      message: '"username" is required',
    });
  } 
  if (typeof username !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"username" must be a string',
    });
  }
  if (username.length < 3) {
    return res.status(UNPROCESSABLE_ENTITY).json(
      { message: '"username" length must be at least 3 characters long' },
    );
  }
  next();
}

function claseValidation(req: Request, res: Response, next: NextFunction) {
  const { classe } = req.body as IUser;
  if (!classe) {
    return res.status(BAD_REQUEST).json({
      message: '"classe" is required',
    });
  } 
  if (typeof classe !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"classe" must be a string',
    });
  }
  if (classe.length < 3) {
    return res.status(UNPROCESSABLE_ENTITY).json(
      { message: '"classe" length must be at least 3 characters long' },
    );
  }
  next();
}

function levelValidation(req: Request, res: Response, next: NextFunction) {
  // pesquisar se da para colocar essas duas próximas linhas em uma só
  const body = req.body as IUser;
  const { level } = req.body as IUser;
  if (!Object.keys(body).includes('level')) {
    return res.status(BAD_REQUEST).json({
      message: '"level" is required',
    });
  }
  if (typeof level !== 'number') {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"level" must be a number',
    });
  }
  if (level < 1) {
    return res.status(UNPROCESSABLE_ENTITY).json(
      { message: '"level" must be greater than or equal to 1' },
    );
  }
  next();
}

function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body as IUser;
  if (!password) {
    return res.status(BAD_REQUEST).json({
      message: '"password" is required',
    });
  } 
  if (typeof password !== 'string') {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"password" must be a string',
    });
  }
  if (password.length < 8) {
    return res.status(UNPROCESSABLE_ENTITY).json(
      { message: '"password" length must be at least 8 characters long' },
    );
  }
  next();
}

export default {
  nameValidation,
  claseValidation,
  levelValidation,
  passwordValidation,
};