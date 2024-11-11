import { CreateToppingDTO, UpdateToppingDTO } from '@dto/topping.dto';
import prisma from '@utils/prisma.client';

export const createTopping = async (data: CreateToppingDTO) => {
  return prisma.topping.create({
    data: {
      name: data.name,
      imageUrl: data.imageUrl,
    },
  });
};

export const getToppingById = async (toppingId: number) => {
  return prisma.topping.findUnique({
    where: { id: toppingId },
  });
};

export const getAllToppings = async () => {
  return prisma.topping.findMany();
};

export const updateTopping = async (
  toppingId: number,
  data: UpdateToppingDTO
) => {
  return prisma.topping.update({
    where: { id: toppingId },
    data: data,
  });
};

export const deleteTopping = async (toppingId: number) => {
  return prisma.topping.delete({
    where: { id: toppingId },
  });
};
