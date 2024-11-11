import cors from 'cors';
import express, { Express } from 'express';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// =================================================================
// ROUTES
// ===========================================s======================

export default app;
