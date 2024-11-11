import {
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from '@dto/transaction.dto';
import * as transactionRepository from '@repositories/transaction.repo';

export const createTransaction = async (data: CreateTransactionDTO) => {
  // Menghitung subtotal dan validasi produk dan topping
  if (data.orders.length === 0) {
    throw new Error('Transaction must have at least one order.');
  }

  const transaction = await transactionRepository.createTransaction(data);
  return transaction;
};

export const getTransactionById = async (transactionId: number) => {
  const transaction = await transactionRepository.getTransactionById(
    transactionId
  );
  if (!transaction) {
    throw new Error(`Transaction with ID ${transactionId} not found`);
  }
  return transaction;
};

export const getTransactionsByUser = async (userId: number) => {
  return transactionRepository.getTransactionsByUser(userId);
};

export const updateTransaction = async (
  transactionId: number,
  data: UpdateTransactionDTO
) => {
  const transaction = await transactionRepository.getTransactionById(
    transactionId
  );
  if (!transaction) {
    throw new Error(`Transaction with ID ${transactionId} not found`);
  }
  return transactionRepository.updateTransaction(transactionId, data);
};

export const deleteTransaction = async (transactionId: number) => {
  const transaction = await transactionRepository.getTransactionById(
    transactionId
  );
  if (!transaction) {
    throw new Error(`Transaction with ID ${transactionId} not found`);
  }
  return transactionRepository.deleteTransaction(transactionId);
};
