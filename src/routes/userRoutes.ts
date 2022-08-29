import { Router } from 'express';
import createUserController from '../controllers/userController';

const productsRouter = Router();

productsRouter.post('/', createUserController);

export default productsRouter;