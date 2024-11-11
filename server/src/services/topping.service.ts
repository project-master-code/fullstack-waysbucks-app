import { CreateToppingDTO, UpdateToppingDTO } from '@dto/topping.dto';
import * as toppingRepository from '@repositories/topping.repo';

export const createTopping = async (data: CreateToppingDTO) => {
  const existingTopping = await toppingRepository.getAllToppings();
  const isDuplicate = existingTopping.some(
    (topping) => topping.name === data.name
  );
  if (isDuplicate) {
    throw new Error(`Topping with name ${data.name} already exists`);
  }
  return toppingRepository.createTopping(data);
};

export const getToppingById = async (toppingId: number) => {
  const topping = await toppingRepository.getToppingById(toppingId);
  if (!topping) {
    throw new Error(`Topping with ID ${toppingId} not found`);
  }
  return topping;
};

export const getAllToppings = async () => {
  return toppingRepository.getAllToppings();
};

export const updateTopping = async (
  toppingId: number,
  data: UpdateToppingDTO
) => {
  const topping = await toppingRepository.getToppingById(toppingId);
  if (!topping) {
    throw new Error(`Topping with ID ${toppingId} not found`);
  }
  return toppingRepository.updateTopping(toppingId, data);
};

export const deleteTopping = async (toppingId: number) => {
  const topping = await toppingRepository.getToppingById(toppingId);
  if (!topping) {
    throw new Error(`Topping with ID ${toppingId} not found`);
  }
  return toppingRepository.deleteTopping(toppingId);
};
