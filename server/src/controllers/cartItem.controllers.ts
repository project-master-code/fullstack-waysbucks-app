import { Request, Response } from 'express';
import { CreateCartItemDTO, UpdateCartItemDTO } from '@dto/cartItem.dto';
import * as cartItemService from '@services/cartItem.service';

export const createCartItem = async (req: Request, res: Response) => {
  try {
    const data: CreateCartItemDTO = req.body;
    const cartItem = await cartItemService.createCartItem(data);
    res.status(201).json(cartItem);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getCartItemById = async (req: Request, res: Response) => {
  try {
    const cartItemId = parseInt(req.params.id);
    const cartItem = await cartItemService.getCartItemById(cartItemId);
    res.json(cartItem);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getCartItemsByUser = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const cartItems = await cartItemService.getCartItemsByUser(userId);
    res.json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const cartItemId = parseInt(req.params.id);
    const data: UpdateCartItemDTO = req.body;
    const updatedCartItem = await cartItemService.updateCartItem(
      cartItemId,
      data
    );
    res.json(updatedCartItem);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartItem = async (req: Request, res: Response) => {
  try {
    const cartItemId = parseInt(req.params.id);
    await cartItemService.deleteCartItem(cartItemId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
