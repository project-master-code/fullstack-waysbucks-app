import { CreateOrderDTO, UpdateOrderDTO } from '@dto/order.dto';
import prisma from '@utils/prisma.client';

export const createOrder = async (data: CreateOrderDTO) => {
  return prisma.order.create({
    data: {
      transactionId: data.transactionId,
      productId: data.productId,
      quantity: data.quantity,
      price: data.price,
    },
  });
};

export const getOrderById = async (orderId: number) => {
  return prisma.order.findUnique({
    where: { id: orderId },
  });
};

export const getAllOrders = async () => {
  return prisma.order.findMany({
    include: {
      product: true,
      transaction: true,
    },
  });
};

export const updateOrder = async (orderId: number, data: UpdateOrderDTO) => {
  return prisma.order.update({
    where: { id: orderId },
    data: data,
  });
};

export const deleteOrder = async (orderId: number) => {
  return prisma.order.delete({
    where: { id: orderId },
  });
};
