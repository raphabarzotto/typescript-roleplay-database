import { Router } from 'express';
import * as productController from '../controllers/productsController';
import productsMiddlewares from '../middlewares/productsMiddlewares';

const productsRouter = Router();

productsRouter.post(
  '/',
  productsMiddlewares.nameValidation,
  productsMiddlewares.amountValidation,
  productController.create,
);
productsRouter.get('/', productController.getAll);

export default productsRouter;