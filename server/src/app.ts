import cors from 'cors';
import express, { Express } from 'express';
import Authrouter from './routes/auth.router';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// =================================================================
// ROUTES
// ===========================================s======================
app.use('/api/auth', Authrouter);

export default app;
