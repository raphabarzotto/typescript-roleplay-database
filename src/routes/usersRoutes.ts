import { Router } from 'express';
import createUserController from '../controllers/userController';

const usersRouter = Router();

usersRouter.post('/', createUserController);

export default usersRouter;