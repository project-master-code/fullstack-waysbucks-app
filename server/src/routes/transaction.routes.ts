import { Router } from 'express';
import * as transactionController from '@controllers/transaction.controllers';

const TransactionRouter = Router();

TransactionRouter.post('/', transactionController.createTransaction);
TransactionRouter.get('/:id', transactionController.getTransactionById);
TransactionRouter.get(
  '/user/:userId',
  transactionController.getTransactionsByUser
);
TransactionRouter.put('/:id', transactionController.updateTransaction);
TransactionRouter.delete('/:id', transactionController.deleteTransaction);

export default TransactionRouter;
