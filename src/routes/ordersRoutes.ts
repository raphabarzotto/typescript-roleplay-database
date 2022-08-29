import { Router } from 'express';
import getAllOrdersController from '../controllers/ordersController';

const ordersRouter = Router();

ordersRouter.get('/', getAllOrdersController);

export default ordersRouter;