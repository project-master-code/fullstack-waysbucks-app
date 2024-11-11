import { Request, Response } from 'express';
import { CreateOrderDTO, UpdateOrderDTO } from '@dto/order.dto';
import * as orderService from '@services/order.service';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const data: CreateOrderDTO = req.body;
    const order = await orderService.createOrder(data);
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const order = await orderService.getOrderById(orderId);
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const data: UpdateOrderDTO = req.body;
    const updatedOrder = await orderService.updateOrder(orderId, data);
    res.json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    await orderService.deleteOrder(orderId);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};
