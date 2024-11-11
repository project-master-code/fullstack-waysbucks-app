import cors from 'cors';
import express, { Express } from 'express';
import Authrouter from './routes/auth.router';
import ProductRouter from './routes/product.router';
import ToppingRouter from './routes/topping.router';
import OrderRouter from './routes/order.router';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// =================================================================
// ROUTES
// ===========================================s======================
app.use('/api/auth', Authrouter);
app.use('/api/product', ProductRouter);
app.use('/api/topping', ToppingRouter);
app.use('/api/order', OrderRouter);

export default app;
