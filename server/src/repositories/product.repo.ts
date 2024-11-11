import { CreateProductDTO, UpdateProductDTO } from '@dto/product.sto';
import prisma from '@utils/prisma.client';

export const createProduct = async (data: CreateProductDTO) => {
  return prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      imageUrl: data.imageUrl,
      toppings: data.toppingIds
        ? {
            connect: data.toppingIds.map((id) => ({ id })),
          }
        : undefined,
    },
    include: {
      toppings: true,
    },
  });
};

export const getProductById = async (productId: number) => {
  return prisma.product.findUnique({
    where: { id: productId },
    include: {
      toppings: true,
    },
  });
};

export const getAllProducts = async () => {
  return prisma.product.findMany({
    include: {
      toppings: true,
    },
  });
};

export const updateProduct = async (
  productId: number,
  data: UpdateProductDTO
) => {
  return prisma.product.update({
    where: { id: productId },
    data: {
      ...data,
      toppings: data.toppingIds
        ? {
            set: data.toppingIds.map((id) => ({ id })),
          }
        : undefined,
    },
    include: {
      toppings: true,
    },
  });
};

export const deleteProduct = async (productId: number) => {
  return prisma.product.delete({
    where: { id: productId },
  });
};
