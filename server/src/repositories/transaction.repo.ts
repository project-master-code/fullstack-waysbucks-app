import {
  CreateTransactionDTO,
  UpdateTransactionDTO,
} from '@dto/transaction.dto';
import prisma from '@utils/prisma.client';

export const createTransaction = async (data: CreateTransactionDTO) => {
  return prisma.transaction.create({
    data: {
      userId: data.userId,
      customerName: data.customerName,
      address: data.address,
      postalCode: data.postalCode,
      totalIncome: data.totalIncome,
      status: data.status,
      subtotal: data.orders.reduce(
        (sum, order) => sum + order.price * order.quantity,
        0
      ),
      orders: {
        create: data.orders.map((order) => ({
          productId: order.productId,
          quantity: order.quantity,
          price: order.price,
        })),
      },
      toppings: {
        create: data.toppings?.map((topping) => ({
          toppingId: topping.toppingId,
        })),
      },
    },
    include: {
      orders: true,
      toppings: true,
    },
  });
};

export const getTransactionById = async (transactionId: number) => {
  return prisma.transaction.findUnique({
    where: { id: transactionId },
    include: {
      orders: true,
      toppings: true,
    },
  });
};

export const getTransactionsByUser = async (userId: number) => {
  return prisma.transaction.findMany({
    where: { userId: userId },
    include: {
      orders: true,
      toppings: true,
    },
  });
};

export const updateTransaction = async (
  transactionId: number,
  data: UpdateTransactionDTO
) => {
  return prisma.transaction.update({
    where: { id: transactionId },
    data: data,
    include: {
      orders: true,
      toppings: true,
    },
  });
};

export const deleteTransaction = async (transactionId: number) => {
  return prisma.transaction.delete({
    where: { id: transactionId },
  });
};
