import { CreateCartItemDTO, UpdateCartItemDTO } from '@dto/cartItem.dto';
import prisma from '@utils/prisma.client';

export const createCartItem = async (data: CreateCartItemDTO) => {
  return prisma.cartItem.create({
    data: {
      userId: data.userId,
      productId: data.productId,
      quantity: data.quantity,
    },
  });
};

export const getCartItemById = async (cartItemId: number) => {
  return prisma.cartItem.findUnique({
    where: { id: cartItemId },
  });
};

export const getCartItemsByUser = async (userId: number) => {
  return prisma.cartItem.findMany({
    where: { userId: userId },
    include: {
      product: true,
    },
  });
};

export const updateCartItem = async (
  cartItemId: number,
  data: UpdateCartItemDTO
) => {
  return prisma.cartItem.update({
    where: { id: cartItemId },
    data: data,
  });
};

export const deleteCartItem = async (cartItemId: number) => {
  return prisma.cartItem.delete({
    where: { id: cartItemId },
  });
};
