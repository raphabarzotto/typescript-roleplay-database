import express from 'express';

import productsRouter from './routes/productsRoutes';
import usersRouter from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', usersRouter);

export default app;