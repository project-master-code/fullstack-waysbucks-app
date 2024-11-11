import { Request, Response } from 'express';
import {
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from '@dto/transaction.dto';
import * as transactionService from '@services/transaction.service';

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const data: CreateTransactionDTO = req.body;
    const transaction = await transactionService.createTransaction(data);
    res.status(201).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getTransactionById = async (req: Request, res: Response) => {
  try {
    const transactionId = parseInt(req.params.id);
    const transaction = await transactionService.getTransactionById(
      transactionId
    );
    res.json(transaction);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getTransactionsByUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const transactions = await transactionService.getTransactionsByUser(userId);
    res.json(transactions);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = parseInt(req.params.id);
    const data: UpdateTransactionDTO = req.body;
    const updatedTransaction = await transactionService.updateTransaction(
      transactionId,
      data
    );
    res.json(updatedTransaction);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = parseInt(req.params.id);
    await transactionService.deleteTransaction(transactionId);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};
