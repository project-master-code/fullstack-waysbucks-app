import { Request, Response } from 'express';
import { CreateToppingDTO, UpdateToppingDTO } from '@dto/topping.dto';
import * as toppingService from '@services/topping.service';

export const createTopping = async (req: Request, res: Response) => {
  try {
    const data: CreateToppingDTO = req.body;
    const topping = await toppingService.createTopping(data);
    res.status(201).json(topping);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getToppingById = async (req: Request, res: Response) => {
  try {
    const toppingId = parseInt(req.params.id);
    const topping = await toppingService.getToppingById(toppingId);
    res.json(topping);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getAllToppings = async (req: Request, res: Response) => {
  try {
    const toppings = await toppingService.getAllToppings();
    res.json(toppings);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateTopping = async (req: Request, res: Response) => {
  try {
    const toppingId = parseInt(req.params.id);
    const data: UpdateToppingDTO = req.body;
    const updatedTopping = await toppingService.updateTopping(toppingId, data);
    res.json(updatedTopping);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteTopping = async (req: Request, res: Response) => {
  try {
    const toppingId = parseInt(req.params.id);
    await toppingService.deleteTopping(toppingId);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};
