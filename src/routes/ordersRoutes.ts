import { Router } from 'express';
import * as ordersControllers from '../controllers/ordersController';
import * as ordersMiddlewares from '../middlewares/ordersMiddlewares';

const ordersRouter = Router();

ordersRouter.get('/', ordersControllers.getAllOrdersController);
ordersRouter.post(
  '/',
  ordersMiddlewares.tokenValidation,
  ordersMiddlewares.productsIdValidation,
  ordersControllers.postOrdercontroller,
);

export default ordersRouter;