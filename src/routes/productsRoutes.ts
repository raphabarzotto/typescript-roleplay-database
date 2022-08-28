import { Router } from 'express';
import * as productController from '../controllers/productsController';

const productsRouter = Router();

productsRouter.post('/', productController.create);
productsRouter.get('/', productController.getAll);

export default productsRouter;