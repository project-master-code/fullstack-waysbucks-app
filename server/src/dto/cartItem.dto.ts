export interface CreateCartItemDTO {
  userId: number;
  productId: number;
  quantity: number;
}

export interface UpdateCartItemDTO {
  quantity?: number;
}
