import { CreateOrderDTO, UpdateOrderDTO } from '@dto/order.dto';
import * as orderRepository from '@repositories/order.repo';

export const createOrder = async (data: CreateOrderDTO) => {
  // Add any business logic if needed
  return orderRepository.createOrder(data);
};

export const getOrderById = async (orderId: number) => {
  const order = await orderRepository.getOrderById(orderId);
  if (!order) {
    throw new Error(`Order with ID ${orderId} not found`);
  }
  return order;
};

export const getAllOrders = async () => {
  return orderRepository.getAllOrders();
};

export const updateOrder = async (orderId: number, data: UpdateOrderDTO) => {
  const order = await orderRepository.getOrderById(orderId);
  if (!order) {
    throw new Error(`Order with ID ${orderId} not found`);
  }
  return orderRepository.updateOrder(orderId, data);
};

export const deleteOrder = async (orderId: number) => {
  const order = await orderRepository.getOrderById(orderId);
  if (!order) {
    throw new Error(`Order with ID ${orderId} not found`);
  }
  return orderRepository.deleteOrder(orderId);
};
