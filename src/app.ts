import express from 'express';

import productRouter from './routes/productRoutes';

const app = express();

app.use(express.json());
app.use('/product', productRouter);

export default app;