import { CreateCartItemDTO, UpdateCartItemDTO } from '@dto/cartItem.dto';
import * as cartItemRepository from '@repositories/cartItem.repo';

export const createCartItem = async (data: CreateCartItemDTO) => {
  // Cek apakah item sudah ada di cart
  const existingCartItem = await cartItemRepository
    .getCartItemsByUser(data.userId)
    .then((cartItems) =>
      cartItems.find((item) => item.productId === data.productId)
    );

  if (existingCartItem) {
    // Jika sudah ada, update jumlahnya
    return cartItemRepository.updateCartItem(existingCartItem.id, {
      quantity: existingCartItem.quantity + data.quantity,
    });
  }

  // Jika tidak ada, tambahkan sebagai item baru
  return cartItemRepository.createCartItem(data);
};

export const getCartItemById = async (cartItemId: number) => {
  const cartItem = await cartItemRepository.getCartItemById(cartItemId);
  if (!cartItem) {
    throw new Error(`CartItem with ID ${cartItemId} not found`);
  }
  return cartItem;
};

export const getCartItemsByUser = async (userId: number) => {
  return cartItemRepository.getCartItemsByUser(userId);
};

export const updateCartItem = async (
  cartItemId: number,
  data: UpdateCartItemDTO
) => {
  const cartItem = await cartItemRepository.getCartItemById(cartItemId);
  if (!cartItem) {
    throw new Error(`CartItem with ID ${cartItemId} not found`);
  }
  return cartItemRepository.updateCartItem(cartItemId, data);
};

export const deleteCartItem = async (cartItemId: number) => {
  const cartItem = await cartItemRepository.getCartItemById(cartItemId);
  if (!cartItem) {
    throw new Error(`CartItem with ID ${cartItemId} not found`);
  }
  return cartItemRepository.deleteCartItem(cartItemId);
};
