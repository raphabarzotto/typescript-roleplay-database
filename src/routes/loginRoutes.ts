import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginMiddlewares from '../middlewares/loginMiddlewares'

const loginRouter = Router();

loginRouter.post('/',loginMiddlewares.nameValidation, loginMiddlewares.passwordValidation, loginController);

export default loginRouter;