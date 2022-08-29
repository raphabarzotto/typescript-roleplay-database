import { Router } from 'express';
import createUserController from '../controllers/userController';
import usersMiddlewares from '../middlewares/usersMiddlewares';

const usersRouter = Router();

usersRouter.post(
  '/',
  usersMiddlewares.nameValidation,
  usersMiddlewares.claseValidation,
  usersMiddlewares.levelValidation,
  usersMiddlewares.passwordValidation,
  createUserController,
);

export default usersRouter;